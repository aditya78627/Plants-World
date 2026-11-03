/**
 * Plants World CRM & Enquiries — Google Apps Script Backend
 *
 * Target Google Sheet Tab: "Enquiries"
 * Columns: Date | Customer Name | Phone | Email | Enquiry Type | Message
 *
 * Deployment Instructions:
 * 1. Open your Google Sheet ("Plants World CRM & Enquiries").
 * 2. Click Extensions -> Apps Script and paste this code into Code.gs.
 * 3. (Optional) If using a standalone script outside the Sheet, paste your Spreadsheet ID into SPREADSHEET_ID below.
 * 4. Click Deploy -> Manage deployments -> Edit (pencil icon) -> Version: "New version" -> Deploy.
 *    Ensure "Execute as" is set to "Me" and "Who has access" is set to "Anyone".
 */

var SPREADSHEET_ID = "1sR_TZCRgw9_p1SSv1X3Do6i3uy5D60trS4cf7dAab2Q";
var SPREADSHEET_NAME = "Plants World CRM & Enquiries";
var SHEET_TAB_NAME = "Enquiries";
var REQUIRED_HEADERS = [
  "Date",
  "Customer Name",
  "Phone",
  "Email",
  "Enquiry Type",
  "Message"
];

// Google Sheets treats values beginning with +, -, =, or @ as formulas.
// Enquiries are user supplied, so escape those prefixes before appending rows.
function asPlainText(value) {
  var text = value === null || value === undefined ? "" : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

/**
 * Resolves the target Google Spreadsheet whether the script is:
 * 1. Container-bound inside the Google Sheet (SpreadsheetApp.getActiveSpreadsheet())
 * 2. Configured with SPREADSHEET_ID
 * 3. Standalone in the same Google account (auto-discovered by name via DriveApp)
 */
function resolveSpreadsheet() {
  var ss = null;

  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
    if (ss) return ss;
  }

  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) return ss;
  } catch (e) {}

  try {
    var files = DriveApp.getFilesByName(SPREADSHEET_NAME);
    if (files.hasNext()) {
      var file = files.next();
      ss = SpreadsheetApp.open(file);
      if (ss) return ss;
    }
  } catch (e) {}

  throw new Error(
    "Spreadsheet not found. Open this script from inside '" +
      SPREADSHEET_NAME +
      "' (Extensions -> Apps Script) or set SPREADSHEET_ID in Code.gs."
  );
}

/**
 * Resolves the "Enquiries" tab (case/whitespace-insensitive) or creates it with the required 6 column headers.
 */
function resolveEnquiriesSheet(ss) {
  var sheet = ss.getSheetByName(SHEET_TAB_NAME);

  if (!sheet) {
    var allSheets = ss.getSheets();
    for (var i = 0; i < allSheets.length; i++) {
      var candidateName = allSheets[i].getName().trim().toLowerCase();
      if (
        candidateName === SHEET_TAB_NAME.toLowerCase() ||
        candidateName === SPREADSHEET_NAME.toLowerCase()
      ) {
        sheet = allSheets[i];
        break;
      }
    }
  }

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_TAB_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(REQUIRED_HEADERS);
  }

  return sheet;
}

function doGet(e) {
  if (e && e.parameter && e.parameter.diagnostic === "1") {
    try {
      var ss = resolveSpreadsheet();
      var sheet = resolveEnquiriesSheet(ss);
      return ContentService.createTextOutput(
        JSON.stringify({
          success: true,
          status: "healthy",
          spreadsheetName: ss.getName(),
          sheetTab: sheet.getName(),
          lastRow: sheet.getLastRow()
        })
      ).setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          status: "error",
          message: "Backend diagnostic failed",
          errorDetail: err && err.message ? err.message : String(err)
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService.createTextOutput(
    "Plants World Backend is running!"
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};

    // 1. Parse JSON body if present
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Merge any query/form parameters
    if (e && e.parameter) {
      for (var key in e.parameter) {
        if (data[key] === undefined || data[key] === "") {
          data[key] = e.parameter[key];
        }
      }
    }

    // 2. Open Spreadsheet and target "Enquiries" tab
    var ss = resolveSpreadsheet();
    var sheet = resolveEnquiriesSheet(ss);

    // 3. Map incoming fields to the 6 columns: Date, Customer Name, Phone, Email, Enquiry Type, Message
    var rowDate =
      data["Date"] ||
      data.date ||
      Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy, hh:mm:ss a");

    var customerName =
      data["Customer Name"] ||
      data.customerName ||
      data.customer_name ||
      data.name ||
      (data.contactPerson && data.company
        ? data.contactPerson + " (" + data.company + ")"
        : data.contactPerson || data.company || "");

    var phone = data["Phone"] || data.phone || data.mobile || "";
    var email = data["Email"] || data.email || "";
    var enquiryType =
      data["Enquiry Type"] ||
      data.enquiryType ||
      data.enquiry_type ||
      data.service ||
      data.type ||
      "General B2B Enquiry";

    var message =
      data["Message"] ||
      data.message ||
      (data.location ? "Project Site / City: " + data.location + "\n\n" : "") +
        (data.boqSummary || "");

    if (!customerName && !phone && !email) {
      throw new Error("Missing required customer contact fields (Name, Phone, Email).");
    }

    var rowBefore = sheet.getLastRow();
    sheet.appendRow([
      rowDate,
      asPlainText(customerName),
      asPlainText(phone),
      asPlainText(email),
      asPlainText(enquiryType),
      asPlainText(message)
    ]);
    SpreadsheetApp.flush();
    var rowAfter = sheet.getLastRow();

    if (rowAfter <= rowBefore) {
      throw new Error("Row append verification failed on sheet '" + sheet.getName() + "'.");
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        status: "success",
        sheetName: sheet.getName(),
        rowNumber: rowAfter,
        message: "Enquiry saved successfully to " + sheet.getName() + " (Row " + rowAfter + ")"
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        status: "error",
        message: "Unable to save enquiry",
        errorDetail: err && err.message ? err.message : String(err)
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
