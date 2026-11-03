// Plants World B2B Catalog & BOQ Schedule Estimator
const PLANT_CATALOG = [
  {
    id: "phoenix-dactylifera",
    botanical: "Phoenix dactylifera",
    common: "Arabian Date Palm (Mature Specimen)",
    category: "palms",
    categoryLabel: "Palm Specimen",
    height: "4500–7500 mm",
    trunk: "3000–5500 mm Clear",
    girth: "900–1400 mm",
    crown: "3500 mm Spread",
    rate: 28500,
    uom: "NOS",
    defaultQty: 10,
    image: "assets/images/profile_img_63.jpg"
  },
  {
    id: "bismarckia-nobilis",
    botanical: "Bismarckia nobilis",
    common: "Silver Bismarck Palm",
    category: "palms",
    categoryLabel: "Palm Specimen",
    height: "2500–4000 mm",
    trunk: "1200–1800 mm",
    girth: "600–900 mm",
    crown: "2500 mm Spread",
    rate: 14500,
    uom: "NOS",
    defaultQty: 8,
    image: "assets/images/profile_img_117.jpg"
  },
  {
    id: "cycas-revoluta",
    botanical: "Cycas revoluta",
    common: "Sago Palm / Feature Cycad",
    category: "palms",
    categoryLabel: "Cycad Specimen",
    height: "1200–2000 mm",
    trunk: "450–900 mm Caudex",
    girth: "450–700 mm",
    crown: "1500 mm Spread",
    rate: 6800,
    uom: "NOS",
    defaultQty: 15,
    image: "assets/images/profile_img_116.jpg"
  },
  {
    id: "wodyetia-bifurcata",
    botanical: "Wodyetia bifurcata",
    common: "Foxtail Palm (Avenue Grade)",
    category: "palms",
    categoryLabel: "Avenue Palm",
    height: "3500–4500 mm",
    trunk: "1800–2200 mm",
    girth: "350–450 mm",
    crown: "2200 mm Spread",
    rate: 4200,
    uom: "NOS",
    defaultQty: 25,
    image: "assets/images/profile_img_114.jpg"
  },
  {
    id: "washingtonia-robusta",
    botanical: "Washingtonia robusta",
    common: "Mexican Fan Palm",
    category: "palms",
    categoryLabel: "Avenue Palm",
    height: "3000–4500 mm",
    trunk: "1500–2400 mm",
    girth: "500–750 mm",
    crown: "2400 mm Spread",
    rate: 5500,
    uom: "NOS",
    defaultQty: 20,
    image: "assets/images/profile_img_115.jpg"
  },
  {
    id: "lagerstroemia-flos-reginae",
    botanical: "Lagerstroemia flos-reginae",
    common: "Pride of India / Jarul (WO Spec)",
    category: "trees",
    categoryLabel: "Evergreen + Flowering",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 51,
    image: "assets/images/profile_img_35.jpg"
  },
  {
    id: "tabebuia-argentea",
    botanical: "Tabebuia argentea",
    common: "Silver Trumpet Tree (WO Spec)",
    category: "trees",
    categoryLabel: "Flowering Canopy",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 15,
    image: "assets/images/profile_img_43.jpg"
  },
  {
    id: "tabebuia-rosea",
    botanical: "Tabebuia rosea",
    common: "Pink Trumpet Avenue Tree (WO Spec)",
    category: "trees",
    categoryLabel: "Flowering Canopy",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 20,
    image: "assets/images/profile_img_102.jpg"
  },
  {
    id: "ficus-lyrata",
    botanical: "Ficus lyrata",
    common: "Fiddle Leaf Fig Tree (WO Spec)",
    category: "trees",
    categoryLabel: "Ornamental Evergreen",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 12,
    image: "assets/images/profile_img_91.jpg"
  },
  {
    id: "terminalia-mantaly",
    botanical: "Terminalia mantaly",
    common: "Madagascar Almond Tiered Tree (WO Spec)",
    category: "trees",
    categoryLabel: "Architectural Evergreen",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 10,
    image: "assets/images/profile_img_97.jpg"
  },
  {
    id: "cassia-fistula",
    botanical: "Cassia fistula",
    common: "Amaltas / Golden Shower (WO Spec)",
    category: "trees",
    categoryLabel: "Native Flowering",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 24,
    image: "assets/images/profile_img_37.jpg"
  },
  {
    id: "callistemon-lanceolatus",
    botanical: "Callistemon lanceolatus",
    common: "Crimson Bottlebrush Tree (WO Spec)",
    category: "trees",
    categoryLabel: "Evergreen + Flowering",
    height: "4000 mm",
    trunk: "1500–1800 mm",
    girth: "150 mm (50mm Caliper)",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 15,
    image: "assets/images/profile_img_14.jpg"
  },
  {
    id: "plumeria-alba-rubra",
    botanical: "Plumeria alba / rubra",
    common: "Frangipani / Champa Specimen (WO Spec)",
    category: "trees",
    categoryLabel: "Fragrant Sculptural",
    height: "3500–4000 mm",
    trunk: "1500 mm Branched",
    girth: "150–200 mm",
    crown: "1500 mm Dia",
    rate: 9390,
    uom: "NOS",
    defaultQty: 18,
    image: "assets/images/profile_img_94.jpg"
  },
  {
    id: "tabernaemontana-divaricata",
    botanical: "Tabernaemontana divaricata",
    common: "Dwarf Chandni (Mass Hedge / Shrub)",
    category: "shrubs",
    categoryLabel: "Evergreen Shrub",
    height: "450–600 mm",
    trunk: "Multi-stemmed Bushy",
    girth: "Polybag 12x12\"",
    crown: "400 mm Spread",
    rate: 85,
    uom: "NOS",
    defaultQty: 500,
    image: "assets/images/profile_img_51.jpg"
  },
  {
    id: "tecoma-capensis",
    botanical: "Tecoma capensis / gaudichaudii",
    common: "Orange & Yellow Bells Shrub",
    category: "shrubs",
    categoryLabel: "Flowering Shrub",
    height: "600–900 mm",
    trunk: "Full Bushy Clump",
    girth: "Polybag 12x12\"",
    crown: "500 mm Spread",
    rate: 95,
    uom: "NOS",
    defaultQty: 350,
    image: "assets/images/profile_img_33.jpg"
  },
  {
    id: "hibiscus-rosa-sinensis",
    botanical: "Hibiscus rosa-sinensis",
    common: "Hybrid Ornamental Hibiscus (Potted)",
    category: "shrubs",
    categoryLabel: "Flowering Shrub",
    height: "600–900 mm",
    trunk: "Multi-branch",
    girth: "10–12\" Nursery Pot",
    crown: "450 mm Spread",
    rate: 120,
    uom: "NOS",
    defaultQty: 250,
    image: "assets/images/profile_img_24.jpg"
  },
  {
    id: "rosa-hybrida",
    botanical: "Rosa hybrida (Assorted)",
    common: "English & Floribunda Nursery Roses",
    category: "shrubs",
    categoryLabel: "Flowering Rose Stock",
    height: "450–600 mm",
    trunk: "Grafted Budded",
    girth: "Polybag / Pot",
    crown: "350 mm Spread",
    rate: 110,
    uom: "NOS",
    defaultQty: 300,
    image: "assets/images/profile_img_72.jpg"
  },
  {
    id: "ficus-pumila-syngonium",
    botanical: "Ficus pumila / Syngonium",
    common: "Creeping Fig & Foliage Groundcover",
    category: "shrubs",
    categoryLabel: "Creeper & Groundcover",
    height: "250–400 mm",
    trunk: "Dense Runner",
    girth: "Polybag 8x8\"",
    crown: "300 mm Spread",
    rate: 55,
    uom: "NOS",
    defaultQty: 600,
    image: "assets/images/profile_img_58.jpg"
  }
];

// State for BOQ Cart
const boqState = new Map();

// Format INR Currency
function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(amount);
}

// Render Plant Catalog Grid
const catalogGrid = document.getElementById("catalogGrid");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const filterTabs = document.querySelectorAll("#catalogFilterTabs .filter-tab");

let activeCategory = "all";
let searchQuery = "";

function renderCatalog() {
  if (!catalogGrid) return;

  const filtered = PLANT_CATALOG.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.botanical.toLowerCase().includes(q) ||
      item.common.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: 12px; border: 1px solid var(--border-light);">
        <h3 style="margin-bottom: 0.5rem;">No matching botanical specimens found</h3>
        <p style="color: var(--text-secondary);">Our 150+ acre Gajraula &amp; Mehrauli nurseries cultivate all types of indoor, outdoor, and potted plants, trees, palms, ferns, vines, and bonsai. Mention custom species directly in the Tender RFQ form below.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered
    .map((plant) => {
      const inBoqQty = boqState.has(plant.id) ? boqState.get(plant.id) : 0;
      return `
        <article class="plant-card" data-id="${plant.id}">
          <div class="plant-card-img">
            <img src="${plant.image}" alt="${plant.botanical} - ${plant.common}" loading="lazy" />
            <span class="plant-category-badge">${plant.categoryLabel}</span>
          </div>
          <div class="plant-card-body">
            <div class="plant-botanical">${plant.botanical}</div>
            <div class="plant-common">${plant.common}</div>
            <div class="plant-specs">
              <div class="spec-item">
                <span class="spec-label">Overall Height</span>
                <span class="spec-val">${plant.height}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Clear Trunk</span>
                <span class="spec-val">${plant.trunk}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Min. Girth / Bag</span>
                <span class="spec-val">${plant.girth}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Crown Spread</span>
                <span class="spec-val">${plant.crown}</span>
              </div>
            </div>
            <div class="plant-card-footer">
              <div class="plant-rate">
                <span class="rate-amount">Price on Request</span>
                <span class="rate-unit">Per ${plant.uom} • Bulk B2B Quote</span>
              </div>
              <div class="boq-add-controls">
                <input
                  type="number"
                  min="1"
                  max="50000"
                  value="${inBoqQty > 0 ? inBoqQty : plant.defaultQty}"
                  class="qty-input"
                  id="qty-${plant.id}"
                  aria-label="Quantity for ${plant.botanical}"
                  onchange="if (boqState.has('${plant.id}')) addToBoq('${plant.id}')"
                />
                <button
                  type="button"
                  class="btn ${inBoqQty > 0 ? "btn-gold" : "btn-primary"}"
                  style="padding: 0.45rem 0.8rem; font-size: 0.8rem;"
                  onclick="addToBoq('${plant.id}')"
                >
                  ${inBoqQty > 0 ? "✓ In BOQ" : "+ BOQ"}
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

window.addToBoq = function (plantId) {
  const qtyInput = document.getElementById(`qty-${plantId}`);
  const parsedQty = qtyInput ? parseInt(qtyInput.value, 10) : 1;
  const qty = Number.isFinite(parsedQty) && parsedQty > 0 ? parsedQty : 1;
  boqState.set(plantId, qty);
  updateBoqUI();
  renderCatalog();
};

window.removeFromBoq = function (plantId) {
  boqState.delete(plantId);
  updateBoqUI();
  renderCatalog();
};

window.updateBoqItemQty = function (plantId, newQty) {
  const qty = parseInt(newQty, 10);
  if (!Number.isFinite(qty) || qty <= 0) {
    boqState.delete(plantId);
  } else {
    boqState.set(plantId, qty);
  }
  updateBoqUI();
  renderCatalog();
};

function updateBoqUI() {
  const countBadge = document.getElementById("boqCountBadge");
  const countSecondary = document.getElementById("boqCountSecondary");
  const drawerItems = document.getElementById("boqDrawerItems");
  const totalUnitsEl = document.getElementById("boqTotalUnits");
  const basicValueEl = document.getElementById("boqBasicValue");
  const gstValueEl = document.getElementById("boqGstValue");
  const grandTotalEl = document.getElementById("boqGrandTotal");
  const rfqBoqSummary = document.getElementById("rfqBoqSummary");

  const itemCount = boqState.size;
  if (countBadge) countBadge.textContent = String(itemCount);
  if (countSecondary) countSecondary.textContent = String(itemCount);

  let totalUnits = 0;
  let internalBasicTotal = 0;
  const summaryLines = [];

  if (itemCount === 0) {
    if (drawerItems) {
      drawerItems.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.4rem;">Your BOQ Schedule is empty</p>
          <p style="font-size: 0.85rem;">Select avenue trees, mature Date Palms, or wholesale shrubs from the catalog to build your project BOQ schedule and request a custom B2B quote.</p>
        </div>
      `;
    }
  } else {
    const rowsHtml = [];
    let srNo = 1;
    boqState.forEach((qty, plantId) => {
      const plant = PLANT_CATALOG.find((p) => p.id === plantId);
      if (!plant) return;
      const lineBasic = plant.rate * qty;
      totalUnits += qty;
      internalBasicTotal += lineBasic;
      summaryLines.push(
        `${srNo}. ${plant.botanical} (${plant.common}) | Spec: Ht ${plant.height}, Trunk ${plant.trunk}, Girth ${plant.girth} | Qty: ${qty} ${plant.uom} | Pricing: Price on Request`
      );
      srNo++;

      rowsHtml.push(`
        <div class="boq-item-row">
          <div class="boq-item-info">
            <h4>${plant.botanical}</h4>
            <p>${plant.common} • Ht: ${plant.height} • Girth: ${plant.girth}</p>
            <p>Quantity: <strong>${qty} ${plant.uom}</strong> • <strong>Price on Request</strong></p>
          </div>
          <div class="boq-item-actions">
            <input
              type="number"
              min="1"
              value="${qty}"
              class="qty-input"
              aria-label="Update quantity for ${plant.botanical}"
              onchange="updateBoqItemQty('${plant.id}', this.value)"
            />
            <button
              type="button"
              class="btn btn-outline"
              style="padding: 0.35rem 0.6rem; font-size: 0.78rem;"
              onclick="removeFromBoq('${plant.id}')"
              aria-label="Remove ${plant.botanical}"
            >✕</button>
          </div>
        </div>
      `);
    });
    if (drawerItems) drawerItems.innerHTML = rowsHtml.join("");
  }

  if (totalUnitsEl) totalUnitsEl.textContent = `${totalUnits} NOS`;
  if (basicValueEl) basicValueEl.textContent = `${itemCount} Species`;
  if (gstValueEl) gstValueEl.textContent = "Price on Request";
  if (grandTotalEl) grandTotalEl.textContent = "Price on Request";

  if (rfqBoqSummary) {
    if (summaryLines.length > 0) {
      rfqBoqSummary.value =
        `--- PLANTS WORLD B2B BOQ SCHEDULE ---\n` +
        summaryLines.join("\n") +
        `\n------------------------------------------------------\n` +
        `Selected Varieties: ${itemCount} Species\n` +
        `Total Quantities: ${totalUnits} NOS\n` +
        `Commercial Terms: Price on Request (Custom B2B Tender Quote)`;
    } else if (rfqBoqSummary.value.startsWith("--- PLANTS WORLD B2B BOQ SCHEDULE")) {
      rfqBoqSummary.value = "";
    }
  }
}

function escapeCsvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

// Export BOQ as CSV
function exportBoqCsv() {
  if (boqState.size === 0) {
    // Seed with 3 flagship items if user clicks export before adding
    boqState.set("phoenix-dactylifera", 10);
    boqState.set("lagerstroemia-flos-reginae", 51);
    boqState.set("tabebuia-argentea", 15);
    updateBoqUI();
    renderCatalog();
  }

  const headers = [
    "Sr. No.",
    "Botanical Name",
    "Common Name",
    "Category",
    "Overall Height",
    "Clear Trunk",
    "Min Girth / Bag",
    "Crown Spread",
    "Qty",
    "UOM",
    "Pricing Status"
  ];

  const rows = [headers.join(",")];
  let sr = 1;
  boqState.forEach((qty, plantId) => {
    const p = PLANT_CATALOG.find((item) => item.id === plantId);
    if (!p) return;
    const row = [
      sr++,
      escapeCsvCell(p.botanical),
      escapeCsvCell(p.common),
      escapeCsvCell(p.categoryLabel),
      escapeCsvCell(p.height),
      escapeCsvCell(p.trunk),
      escapeCsvCell(p.girth),
      escapeCsvCell(p.crown),
      qty,
      p.uom,
      escapeCsvCell("Price on Request")
    ];
    rows.push(row.join(","));
  });

  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Plants_World_B2B_BOQ_Schedule.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Initialize Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Pre-seed 2 representative BOQ items from the Godrej Work Order so estimator is immediately demonstrable
  boqState.set("lagerstroemia-flos-reginae", 51);
  boqState.set("phoenix-dactylifera", 10);

  renderCatalog();
  updateBoqUI();

  // Filter Tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category") || "all";
      renderCatalog();
    });
  });

  // Search Input
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderCatalog();
    });
  }

  // Drawer Open/Close
  const boqDrawer = document.getElementById("boqDrawer");
  const boqBackdrop = document.getElementById("boqBackdrop");
  const openBtn1 = document.getElementById("openBoqDrawerBtn");
  const openBtn2 = document.getElementById("openBoqSecondaryBtn");
  const closeBtn = document.getElementById("closeBoqDrawerBtn");
  const proceedRfqBtn = document.getElementById("boqProceedRfqBtn");

  function openDrawer() {
    if (boqDrawer) boqDrawer.classList.add("open");
    if (boqBackdrop) boqBackdrop.classList.add("open");
  }

  function closeDrawer() {
    if (boqDrawer) boqDrawer.classList.remove("open");
    if (boqBackdrop) boqBackdrop.classList.remove("open");
  }

  if (openBtn1) openBtn1.addEventListener("click", openDrawer);
  if (openBtn2) openBtn2.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (boqBackdrop) boqBackdrop.addEventListener("click", closeDrawer);
  if (proceedRfqBtn) {
    proceedRfqBtn.addEventListener("click", () => {
      closeDrawer();
      const rfqEl = document.getElementById("rfq");
      if (rfqEl) rfqEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Export CSV buttons
  const csvBtn1 = document.getElementById("boqExportCsvBtn");
  const csvBtn2 = document.getElementById("exportCsvMainBtn");
  if (csvBtn1) csvBtn1.addEventListener("click", exportBoqCsv);
  if (csvBtn2) csvBtn2.addEventListener("click", exportBoqCsv);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
  }

  // Gallery Lightbox
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const fullSrc = item.getAttribute("data-full");
      const title = item.getAttribute("data-title");
      if (lightboxImg && fullSrc) lightboxImg.src = fullSrc;
      if (lightboxCaption) lightboxCaption.textContent = title || "";
      if (lightboxModal) lightboxModal.classList.add("open");
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", () => {
      if (lightboxModal) lightboxModal.classList.remove("open");
    });
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) lightboxModal.classList.remove("open");
    });
  }

  // Close Drawer and Lightbox on Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      if (lightboxModal) lightboxModal.classList.remove("open");
    }
  });

  // Google Apps Script Web App Integration (Plants World CRM & Enquiries -> "Enquiries" tab)
  const GOOGLE_SCRIPT_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxlsM_eZwy9GBjo_MyBHhXrf6LwNVMh1wSlD-GBJRSIXVWy6v4x3v3xsMKMf7--UhjI/exec";
  const GOOGLE_SPREADSHEET_ID = "1sR_TZCRgw9_p1SSv1X3Do6i3uy5D60trS4cf7dAab2Q";

  const rfqForm = document.getElementById("rfqForm");
  const rfqToast = document.getElementById("rfqToast");
  const rfqSubmitBtn = document.getElementById("rfqSubmitBtn");

  function showRfqStatus(type, htmlContent) {
    if (!rfqToast) return;
    rfqToast.className = "toast-banner visible";
    if (type === "loading") rfqToast.classList.add("loading");
    if (type === "error") rfqToast.classList.add("error");
    rfqToast.innerHTML = htmlContent;
  }

  let isSubmittingRfq = false;

  if (rfqForm) {
    rfqForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (isSubmittingRfq) return;

      const company = document.getElementById("rfqCompany").value.trim();
      const person = document.getElementById("rfqContactPerson").value.trim();
      const phone = document.getElementById("rfqPhone").value.trim();
      const email = document.getElementById("rfqEmail").value.trim();
      const service = document.getElementById("rfqServiceType").value.trim();
      const location = document.getElementById("rfqLocation").value.trim();
      const boqText = document.getElementById("rfqBoqSummary").value.trim();

      // Client-side validation: required fields
      if (!company || !person || !phone || !email || !service || !location) {
        showRfqStatus(
          "error",
          "⚠️ <strong>Validation Error:</strong> Please complete all required fields marked with *."
        );
        return;
      }

      // Client-side validation: 10-digit phone number (allows optional +91 or leading 0)
      const digitsOnly = phone.replace(/\D/g, "");
      const normalizedPhone =
        digitsOnly.length === 12 && digitsOnly.startsWith("91")
          ? digitsOnly.slice(2)
          : digitsOnly.length === 11 && digitsOnly.startsWith("0")
          ? digitsOnly.slice(1)
          : digitsOnly;

      if (normalizedPhone.length !== 10 || !/^[6-9]\d{9}$/.test(normalizedPhone)) {
        showRfqStatus(
          "error",
          "⚠️ <strong>Invalid Phone Number:</strong> Please enter a valid 10-digit mobile or WhatsApp number."
        );
        return;
      }

      // Client-side validation: email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showRfqStatus(
          "error",
          "⚠️ <strong>Invalid Email Address:</strong> Please enter a valid corporate email address."
        );
        return;
      }

      // Map fields to Google Sheet "Enquiries" tab columns: Date, Customer Name, Phone, Email, Enquiry Type, Message
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      const customerNameFormatted = `${person} (${company})`;
      const messageFormatted =
        `Project Site / City: ${location}` +
        (boqText ? `\n\n${boqText}` : "\n\n(No BOQ items attached)");

      const payload = {
        spreadsheetId: GOOGLE_SPREADSHEET_ID,
        sheetName: "Enquiries",
        tab: "Enquiries",
        // Exact Sheet Column Headers
        "Date": timestamp,
        "Customer Name": customerNameFormatted,
        "Phone": phone,
        "Email": email,
        "Enquiry Type": service,
        "Message": messageFormatted,
        // Standard camelCase & snake_case keys for Apps Script compatibility
        date: timestamp,
        customerName: customerNameFormatted,
        customer_name: customerNameFormatted,
        name: customerNameFormatted,
        phone: phone,
        email: email,
        enquiryType: service,
        enquiry_type: service,
        type: service,
        service: service,
        message: messageFormatted,
        // Raw individual fields
        company: company,
        contactPerson: person,
        location: location,
        boqSummary: boqText
      };

      // Also attach core fields as URL query parameters so both e.postData.contents and e.parameter work in Apps Script
      const queryParams = new URLSearchParams({
        sheet: "Enquiries",
        Date: timestamp,
        date: timestamp,
        "Customer Name": customerNameFormatted,
        customerName: customerNameFormatted,
        name: customerNameFormatted,
        Phone: phone,
        phone: phone,
        Email: email,
        email: email,
        "Enquiry Type": service,
        enquiryType: service,
        Message: messageFormatted,
        message: messageFormatted
      });

      const subject = encodeURIComponent(`B2B Tender / Bulk Plant RFQ - ${company} (${location})`);
      const body = encodeURIComponent(
        `Organization: ${company}\n` +
        `Contact Person: ${person}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Requirement Scope: ${service}\n` +
        `Project Site / City: ${location}\n\n` +
        `BOQ & Project Details:\n${boqText}`
      );
      const fallbackMailto = `mailto:Aditya.manrai@plants-world.in?cc=AnujRaiMalhotra@plants-world.in,Sahil.khan@plants-world.in,Plantsworld4786@yahoo.co.in&subject=${subject}&body=${body}`;

      isSubmittingRfq = true;
      const origBtnText = rfqSubmitBtn ? rfqSubmitBtn.textContent : "Submit Enquiry & BOQ to Plants World";
      if (rfqSubmitBtn) {
        rfqSubmitBtn.disabled = true;
        rfqSubmitBtn.textContent = "Submitting to Plants World CRM...";
      }
      showRfqStatus(
        "loading",
        "⏳ <strong>Saving Enquiry:</strong> Sending your project BOQ and contact details to Plants World CRM &amp; Enquiries..."
      );

      try {
        const response = await fetch(`${GOOGLE_SCRIPT_WEB_APP_URL}?${queryParams.toString()}`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });

        let result = null;
        const textResponse = await response.text();
        try {
          result = JSON.parse(textResponse);
        } catch {
          result = { raw: textResponse };
        }

        const isSuccess =
          response.ok &&
          result &&
          (result.success === true ||
            result.status === "success" ||
            result.result === "success" ||
            textResponse.toLowerCase().includes('"success":true'));

        if (isSuccess) {
          const rowInfo = result && result.rowNumber ? ` (Row #${result.rowNumber})` : "";
          showRfqStatus(
            "success",
            `✓ <strong>Enquiry Saved to Plants World CRM${rowInfo}:</strong> Thank you, <strong>${person} (${company})</strong>. Your ${service} enquiry for <strong>${location}</strong> has been recorded in the Enquiries sheet. ` +
            `<a href="${fallbackMailto}" style="text-decoration: underline; font-weight: 700; margin-left: 0.3rem;">Open Official Email Draft ↗</a>`
          );
          document.getElementById("rfqCompany").value = "";
          document.getElementById("rfqContactPerson").value = "";
          document.getElementById("rfqPhone").value = "";
          document.getElementById("rfqEmail").value = "";
          document.getElementById("rfqLocation").value = "";
        } else {
          const serverErrorMsg =
            (result && (result.errorDetail || result.message || result.error)) ||
            "Google Apps Script returned an error while writing to the sheet.";
          showRfqStatus(
            "error",
            `⚠️ <strong>CRM Sheet Sync Notice (${serverErrorMsg}):</strong> Your BOQ schedule is ready, but the Google Sheet backend reported: <em>"${serverErrorMsg}"</em>. ` +
            `<a href="${fallbackMailto}" style="text-decoration: underline; font-weight: 700; margin-left: 0.3rem;">Click here to send via Email ↗</a> or call <strong><a href="tel:+917065682968">+91 70656 82968</a> / <a href="tel:+919953585368">+91 9953585368</a> / <a href="tel:+919899110501">+91 98991 10501</a></strong>.`
          );
        }
      } catch (err) {
        showRfqStatus(
          "error",
          `⚠️ <strong>Network / Connection Error:</strong> Could not reach the Google Apps Script endpoint. ` +
          `<a href="${fallbackMailto}" style="text-decoration: underline; font-weight: 700; margin-left: 0.3rem;">Click here to send via Email ↗</a> or call <strong><a href="tel:+917065682968">+91 70656 82968</a> / <a href="tel:+919953585368">+91 9953585368</a> / <a href="tel:+919899110501">+91 98991 10501</a></strong>.`
        );
      } finally {
        isSubmittingRfq = false;
        if (rfqSubmitBtn) {
          rfqSubmitBtn.disabled = false;
          rfqSubmitBtn.textContent = origBtnText;
        }
      }
    });
  }
});
