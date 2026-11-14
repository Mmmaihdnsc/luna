/**
 * TERRA-LUNA: Planetary Surface Analog Discovery & Characterization Engine
 * NASA Space Apps Challenge 2026
 * Core Application Engine & Visualization Controller
 */

// Application State
const AppState = {
  activeAnalogId: "analog-askja",
  activeCategoryFilter: "all",
  activeTargetFilter: "all",
  searchQuery: "",
  showBridges: true,
  currentTileLayer: "dark",
  map: null,
  markersLayer: null,
  bridgesLayer: null,
  radarChart: null,
  compRadarChart: null,
  tileLayers: {
    dark: null,
    satellite: null
  }
};

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderCatalogCards();
  renderDossier(AppState.activeAnalogId);
  setupFiltersAndSearch();
  setupModals();
  setupTopoCanvas();
  renderOpenDataDirectory();
});

/* ==========================================================================
   1. MAP INITIALIZATION & CONTROLS (Leaflet.js)
   ========================================================================== */
function initMap() {
  // Initialize Leaflet map
  AppState.map = L.map("map", {
    center: [25, 10],
    zoom: 2.4,
    minZoom: 2,
    maxZoom: 14,
    zoomControl: false
  });

  // Zoom control top-right
  L.control.zoom({ position: "topright" }).addTo(AppState.map);

  // Tile Layers (100% Free & Open, NO API key required)
  AppState.tileLayers.dark = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
      maxZoom: 16
    }
  );

  AppState.tileLayers.satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      maxZoom: 18
    }
  );

  // Add default dark layer
  AppState.tileLayers.dark.addTo(AppState.map);

  // Layers for markers and connection arcs
  AppState.markersLayer = L.layerGroup().addTo(AppState.map);
  AppState.bridgesLayer = L.layerGroup().addTo(AppState.map);

  // Plot Analog Markers
  plotAnalogMarkers();

  // Map Layer Button Handlers
  document.getElementById("btnLayerDark").addEventListener("click", () => {
    switchTileLayer("dark");
  });

  document.getElementById("btnLayerSatellite").addEventListener("click", () => {
    switchTileLayer("satellite");
  });

  document.getElementById("btnToggleBridges").addEventListener("click", (e) => {
    AppState.showBridges = !AppState.showBridges;
    e.currentTarget.classList.toggle("active", AppState.showBridges);
    if (AppState.showBridges) {
      drawAnalogBridges();
    } else {
      AppState.bridgesLayer.clearLayers();
    }
  });

  document.getElementById("btnResetView").addEventListener("click", () => {
    AppState.map.setView([25, 10], 2.4, { animate: true });
  });
}

function switchTileLayer(type) {
  if (type === AppState.currentTileLayer) return;

  if (type === "dark") {
    AppState.map.removeLayer(AppState.tileLayers.satellite);
    AppState.map.addLayer(AppState.tileLayers.dark);
    document.getElementById("btnLayerDark").classList.add("active");
    document.getElementById("btnLayerSatellite").classList.remove("active");
  } else {
    AppState.map.removeLayer(AppState.tileLayers.dark);
    AppState.map.addLayer(AppState.tileLayers.satellite);
    document.getElementById("btnLayerSatellite").classList.add("active");
    document.getElementById("btnLayerDark").classList.remove("active");
  }
  AppState.currentTileLayer = type;
}

function plotAnalogMarkers() {
  AppState.markersLayer.clearLayers();

  EARTH_ANALOGS.forEach((site) => {
    const isMoon = site.targetMatchId.startsWith("moon");
    const markerClass = isMoon ? "target-moon" : "target-mars";
    const iconIcon = isMoon ? "fa-moon" : "fa-circle-dot";

    const customIcon = L.divIcon({
      className: "custom-analog-marker",
      html: `<div class="analog-pin ${markerClass}" title="${site.name}">
               <i class="fa-solid ${iconIcon}"></i>
             </div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });

    const marker = L.marker([site.lat, site.lng], { icon: customIcon });

    // Popup content
    const popupHtml = `
      <div style="min-width: 220px;">
        <div style="font-size: 0.68rem; text-transform: uppercase; color: ${isMoon ? 'var(--color-cyan)' : 'var(--color-mars)'}; font-weight: 700;">
          ${site.category} &bull; ${site.scores.overall}% FIDELITY
        </div>
        <div class="popup-site-title">${site.name}</div>
        <div class="popup-site-desc">${site.region}</div>
        <div style="font-size: 0.72rem; color: #cbd5e1; margin-bottom: 0.5rem;">
          <strong>Target Match:</strong> ${site.targetMatchName}
        </div>
        <button class="btn btn-cyan" style="width: 100%; justify-content: center; padding: 0.35rem 0.5rem;" onclick="selectAnalogSite('${site.id}')">
          <i class="fa-solid fa-file-lines"></i> Open Dossier
        </button>
      </div>
    `;

    marker.bindPopup(popupHtml);
    marker.on("click", () => {
      selectAnalogSite(site.id, false);
    });

    AppState.markersLayer.addLayer(marker);
  });

  if (AppState.showBridges) {
    drawAnalogBridges();
  }
}

function drawAnalogBridges() {
  AppState.bridgesLayer.clearLayers();

  // Create subtle planetary indicator hubs on the map margin
  const moonHubCoords = [82, 0];      // High North (representing Artemis Polar base)
  const marsHubCoords = [-65, 0];     // High South (representing Mars surface targets)

  EARTH_ANALOGS.forEach((site) => {
    const isMoon = site.targetMatchId.startsWith("moon");
    const targetCoord = isMoon ? moonHubCoords : marsHubCoords;
    const strokeColor = isMoon ? "#00e5ff" : "#ff5722";

    // Draw geodesic-style curved connecting line
    const curvePoints = calculateArcPoints([site.lat, site.lng], targetCoord, 20);
    const polyline = L.polyline(curvePoints, {
      color: strokeColor,
      weight: 1.2,
      opacity: 0.28,
      dashArray: "4, 6"
    });

    AppState.bridgesLayer.addLayer(polyline);
  });
}

// Generate intermediate arc coordinates for visual curve
function calculateArcPoints(start, end, numPoints) {
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const fraction = i / numPoints;
    const lat = start[0] + (end[0] - start[0]) * fraction;
    const lng = start[1] + (end[1] - start[1]) * fraction;
    // Add sinusoidal arc offset
    const arcHeight = Math.sin(fraction * Math.PI) * 12;
    points.push([lat + arcHeight, lng]);
  }
  return points;
}

/* ==========================================================================
   2. CATALOG LIST & FILTERING
   ========================================================================== */
function setupFiltersAndSearch() {
  // Target pills
  const targetPills = document.querySelectorAll("#targetFilterPills .filter-pill");
  targetPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      targetPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.activeTargetFilter = pill.getAttribute("data-target");
      renderCatalogCards();
    });
  });

  // Category pills
  const categoryPills = document.querySelectorAll("#categoryFilterPills .filter-pill");
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      categoryPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.activeCategoryFilter = pill.getAttribute("data-category");
      renderCatalogCards();
    });
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value.toLowerCase().trim();
    renderCatalogCards();
  });
}

function getFilteredAnalogs() {
  return EARTH_ANALOGS.filter((site) => {
    // Target filter
    if (AppState.activeTargetFilter === "moon" && !site.targetMatchId.startsWith("moon")) {
      return false;
    }
    if (AppState.activeTargetFilter === "mars" && !site.targetMatchId.startsWith("mars")) {
      return false;
    }

    // Category filter
    if (AppState.activeCategoryFilter !== "all" && site.category !== AppState.activeCategoryFilter) {
      return false;
    }

    // Search query
    if (AppState.searchQuery) {
      const matchName = site.name.toLowerCase().includes(AppState.searchQuery);
      const matchRegion = site.region.toLowerCase().includes(AppState.searchQuery);
      const matchDesc = site.description.toLowerCase().includes(AppState.searchQuery);
      const matchTarget = site.targetMatchName.toLowerCase().includes(AppState.searchQuery);
      if (!matchName && !matchRegion && !matchDesc && !matchTarget) {
        return false;
      }
    }

    return true;
  });
}

function renderCatalogCards() {
  const container = document.getElementById("siteCardsContainer");
  const filtered = getFilteredAnalogs();

  // Update badge count
  document.getElementById("filterResultCount").textContent = `${filtered.length} Available`;

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim); font-size: 0.8rem;">
        <i class="fa-solid fa-satellite" style="font-size: 1.5rem; margin-bottom: 0.5rem; display: block;"></i>
        No analog sites match current filters.
      </div>
    `;
    return;
  }

  filtered.forEach((site) => {
    const isMoon = site.targetMatchId.startsWith("moon");
    const isActive = site.id === AppState.activeAnalogId;

    const card = document.createElement("div");
    card.className = `site-card ${isActive ? "active" : ""}`;
    card.setAttribute("data-id", site.id);

    card.innerHTML = `
      <div class="site-card-header">
        <div class="site-card-title">${site.name}</div>
        <div class="score-badge">${site.scores.overall}%</div>
      </div>
      <div class="site-card-meta">
        <span><i class="fa-solid fa-location-dot"></i> ${site.region}</span>
      </div>
      <div class="target-match-tag">
        <i class="fa-solid ${isMoon ? "fa-moon" : "fa-circle-dot"}"></i>
        <span>${site.targetMatchName.split("/")[0]}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      selectAnalogSite(site.id, true);
    });

    container.appendChild(card);
  });
}

function selectAnalogSite(siteId, panTo = true) {
  AppState.activeAnalogId = siteId;

  // Update active state in catalog cards
  const cards = document.querySelectorAll(".site-card");
  cards.forEach((card) => {
    card.classList.toggle("active", card.getAttribute("data-id") === siteId);
  });

  const site = EARTH_ANALOGS.find((s) => s.id === siteId);
  if (!site) return;

  // Render deep dossier
  renderDossier(siteId);

  // Pan map if requested
  if (panTo && AppState.map) {
    AppState.map.setView([site.lat, site.lng], 5, { animate: true });
  }
}

/* ==========================================================================
   3. DEEP CHARACTERIZATION DOSSIER & RADAR CHART
   ========================================================================== */
function renderDossier(siteId) {
  const container = document.getElementById("dossierContainer");
  const site = EARTH_ANALOGS.find((s) => s.id === siteId);
  if (!site) return;

  const isMoon = site.targetMatchId.startsWith("moon");
  const matchedTarget = PLANETARY_TARGETS.find((t) => t.id === site.targetMatchId) || PLANETARY_TARGETS[0];

  container.innerHTML = `
    <!-- Hero Header -->
    <div class="dossier-hero">
      <div class="dossier-category">
        <span>${site.category}</span>
        <span class="score-badge">${site.scores.overall}% ANALOG MATCH</span>
      </div>
      <h2 class="dossier-title">${site.name}</h2>
      <div class="dossier-subtitle">
        <span><i class="fa-solid fa-map-pin"></i> ${site.region}</span>
        <span>&bull;</span>
        <span><i class="fa-solid fa-compass"></i> ${site.coordinates}</span>
      </div>

      <div class="match-target-banner">
        <div>
          <div class="target-info-label">Primary Extraterrestrial Match</div>
          <div class="target-info-val">
            <i class="fa-solid ${isMoon ? "fa-moon" : "fa-circle-dot"}" style="color: ${isMoon ? "var(--color-cyan)" : "var(--color-mars)"}"></i>
            ${matchedTarget.name} (${matchedTarget.body})
          </div>
        </div>
        <button class="btn btn-cyan" style="font-size: 0.72rem; padding: 0.35rem 0.65rem;" onclick="openComparisonWithCurrent()">
          <i class="fa-solid fa-arrow-right-arrow-left"></i> Compare
        </button>
      </div>
    </div>

    <!-- Multi-Parametric Radar Analysis -->
    <div class="dossier-section">
      <div class="section-label">
        <i class="fa-solid fa-chart-radar"></i> 5-Axis Planetary Similarity Index
      </div>
      <div class="radar-chart-container">
        <canvas id="dossierRadarChart"></canvas>
      </div>

      <div class="scores-breakdown-grid">
        <div class="score-mini-card">
          <div class="score-mini-title">Topography &amp; Slope <span>${site.scores.topography}%</span></div>
          <div class="score-mini-bar-bg"><div class="score-mini-bar-fill" style="width: ${site.scores.topography}%;"></div></div>
        </div>
        <div class="score-mini-card">
          <div class="score-mini-title">Mineralogy Fidelity <span>${site.scores.mineralogy}%</span></div>
          <div class="score-mini-bar-bg"><div class="score-mini-bar-fill" style="width: ${site.scores.mineralogy}%; background: var(--color-emerald);"></div></div>
        </div>
        <div class="score-mini-card">
          <div class="score-mini-title">Environmental Extremes <span>${site.scores.environment}%</span></div>
          <div class="score-mini-bar-bg"><div class="score-mini-bar-fill" style="width: ${site.scores.environment}%; background: var(--color-mars);"></div></div>
        </div>
        <div class="score-mini-card">
          <div class="score-mini-title">Regolith Mechanics <span>${site.scores.regolith}%</span></div>
          <div class="score-mini-bar-bg"><div class="score-mini-bar-fill" style="width: ${site.scores.regolith}%; background: #a855f7;"></div></div>
        </div>
      </div>
    </div>

    <!-- Key Analogous Characteristics -->
    <div class="dossier-section">
      <div class="section-label">
        <i class="fa-solid fa-fingerprint"></i> Surface Geological &amp; Chemical Fidelity
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.45;">
        ${site.description}
      </p>
      <ul class="bullet-list">
        ${site.keyAnalogs.map((item) => `<li><i class="fa-solid fa-chevron-right"></i> <span>${item}</span></li>`).join("")}
      </ul>
    </div>

    <!-- Mission Applications -->
    <div class="dossier-section">
      <div class="section-label">
        <i class="fa-solid fa-rocket"></i> Critical Mission Subsystem Applications
      </div>
      <ul class="bullet-list">
        ${site.missionApplications.map((app) => `<li><i class="fa-solid fa-check"></i> <span>${app}</span></li>`).join("")}
      </ul>
    </div>

    <!-- NASA Open Datasets Utilized -->
    <div class="dossier-section">
      <div class="section-label">
        <i class="fa-solid fa-satellite"></i> Integrated Open NASA &amp; Orbital Datasets
      </div>
      <div class="nasa-datasets-list">
        ${site.nasaDatasets.map((ds) => `
          <div class="dataset-chip">
            <span><i class="fa-solid fa-database"></i> ${ds}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Field Logistics & Space Flight Heritage -->
    <div class="dossier-section" style="border-bottom: none;">
      <div class="section-label">
        <i class="fa-solid fa-person-walking-luggage"></i> Field Logistics &amp; Operational Readiness
      </div>
      <table class="comp-table" style="font-size: 0.75rem;">
        <tr>
          <td class="label">Access:</td>
          <td class="val">${site.fieldLogistics.accessibility}</td>
        </tr>
        <tr>
          <td class="label">Isolation:</td>
          <td class="val">${site.fieldLogistics.isolationLevel}</td>
        </tr>
        <tr>
          <td class="label">Facilities:</td>
          <td class="val">${site.fieldLogistics.activeFacilities}</td>
        </tr>
      </table>

      <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
        <button class="btn btn-cyan" style="flex: 1; justify-content: center;" onclick="openComparisonWithCurrent()">
          <i class="fa-solid fa-arrows-split-up-and-left"></i> Dual Telemetry
        </button>
        <button class="btn btn-mars" style="flex: 1; justify-content: center;" onclick="openTopoModal()">
          <i class="fa-solid fa-mountain"></i> Topo Transect
        </button>
      </div>
    </div>
  `;

  // Initialize Radar Chart
  initDossierRadarChart(site);
}

function initDossierRadarChart(site) {
  const ctx = document.getElementById("dossierRadarChart");
  if (!ctx) return;

  if (AppState.radarChart) {
    AppState.radarChart.destroy();
  }

  AppState.radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Topography", "Mineralogy", "Environment", "Regolith", "Mission Utility"],
      datasets: [
        {
          label: site.name.split("&")[0],
          data: [
            site.scores.topography,
            site.scores.mineralogy,
            site.scores.environment,
            site.scores.regolith,
            site.scores.missionUtility
          ],
          backgroundColor: "rgba(0, 229, 255, 0.2)",
          borderColor: "#00e5ff",
          pointBackgroundColor: "#00e5ff",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#00e5ff",
          borderWidth: 2
        },
        {
          label: "Benchmark Target",
          data: [85, 90, 80, 85, 90],
          backgroundColor: "rgba(255, 87, 34, 0.15)",
          borderColor: "#ff5722",
          pointBackgroundColor: "#ff5722",
          pointBorderColor: "#fff",
          borderWidth: 1.5,
          borderDash: [4, 4]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: "rgba(255, 255, 255, 0.1)" },
          grid: { color: "rgba(255, 255, 255, 0.08)" },
          pointLabels: {
            color: "#94a3b8",
            font: { size: 9, family: "'Inter', sans-serif" }
          },
          ticks: {
            display: false,
            min: 50,
            max: 100
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#cbd5e1",
            font: { size: 10, family: "'Inter', sans-serif" },
            boxWidth: 10
          }
        }
      }
    }
  });
}

/* ==========================================================================
   4. SIDE-BY-SIDE DUAL TELEMETRY COMPARISON MODAL
   ========================================================================== */
function setupModals() {
  // Modal toggles
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = e.currentTarget.getAttribute("data-close");
      closeModal(modalId);
    });
  });

  // Close on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
      }
    });
  });

  // Open Compare Modal
  document.getElementById("btnOpenCompare").addEventListener("click", () => {
    openModal("modalCompare");
    populateCompareDropdowns();
    renderComparisonMatrix();
  });

  // Open Topo Modal
  document.getElementById("btnOpenTopo").addEventListener("click", () => {
    openTopoModal();
  });

  // Open Datasets Modal
  document.getElementById("btnOpenDatasets").addEventListener("click", () => {
    openModal("modalDatasets");
  });

  // Open Project Info
  document.getElementById("btnOpenProjectInfo").addEventListener("click", () => {
    openModal("modalProjectInfo");
  });

  // Print Report Handler
  document.getElementById("btnPrintReport").addEventListener("click", () => {
    window.print();
  });

  // Compare dropdown change listeners
  document.getElementById("selectCompareAnalog").addEventListener("change", renderComparisonMatrix);
  document.getElementById("selectCompareTarget").addEventListener("change", renderComparisonMatrix);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}

function openComparisonWithCurrent() {
  openModal("modalCompare");
  populateCompareDropdowns();
  const selectAnalog = document.getElementById("selectCompareAnalog");
  selectAnalog.value = AppState.activeAnalogId;

  const currentSite = EARTH_ANALOGS.find((s) => s.id === AppState.activeAnalogId);
  if (currentSite) {
    const selectTarget = document.getElementById("selectCompareTarget");
    selectTarget.value = currentSite.targetMatchId;
  }
  renderComparisonMatrix();
}

function populateCompareDropdowns() {
  const selectAnalog = document.getElementById("selectCompareAnalog");
  const selectTarget = document.getElementById("selectCompareTarget");

  selectAnalog.innerHTML = EARTH_ANALOGS.map((s) => `<option value="${s.id}">${s.name} (${s.region})</option>`).join("");
  selectTarget.innerHTML = PLANETARY_TARGETS.map((t) => `<option value="${t.id}">${t.name} [${t.body}]</option>`).join("");
}

function renderComparisonMatrix() {
  const analogId = document.getElementById("selectCompareAnalog").value;
  const targetId = document.getElementById("selectCompareTarget").value;

  const analog = EARTH_ANALOGS.find((s) => s.id === analogId) || EARTH_ANALOGS[0];
  const target = PLANETARY_TARGETS.find((t) => t.id === targetId) || PLANETARY_TARGETS[0];

  const colEarth = document.getElementById("compColEarth");
  const colTarget = document.getElementById("compColTarget");

  colEarth.innerHTML = `
    <div class="comparison-col-header" style="color: var(--color-emerald);">
      <span><i class="fa-solid fa-earth-americas"></i> ${analog.name}</span>
      <span class="score-badge">${analog.scores.overall}% Score</span>
    </div>
    <table class="comp-table">
      <tr>
        <td class="label">Region &amp; Elev:</td>
        <td class="val">${analog.region} (${analog.elevation})</td>
      </tr>
      <tr>
        <td class="label">Climate:</td>
        <td class="val">${analog.climate}</td>
      </tr>
      <tr>
        <td class="label">Thermal Range:</td>
        <td class="val">${analog.tempRange}</td>
      </tr>
      <tr>
        <td class="label">Class:</td>
        <td class="val">${analog.category}</td>
      </tr>
      <tr>
        <td class="label">NASA Data:</td>
        <td class="val">${analog.nasaDatasets[0]}</td>
      </tr>
    </table>
  `;

  colTarget.innerHTML = `
    <div class="comparison-col-header" style="color: var(--color-mars);">
      <span><i class="fa-solid fa-satellite"></i> ${target.name} (${target.body})</span>
      <span class="score-badge" style="background: rgba(255, 87, 34, 0.15); color: var(--color-mars); border-color: rgba(255,87,34,0.3);">${target.mission}</span>
    </div>
    <table class="comp-table">
      <tr>
        <td class="label">Coordinates:</td>
        <td class="val">${target.coordinates}</td>
      </tr>
      <tr>
        <td class="label">Elevation:</td>
        <td class="val">${target.elevation}</td>
      </tr>
      <tr>
        <td class="label">Thermal Range:</td>
        <td class="val">${target.tempRange}</td>
      </tr>
      <tr>
        <td class="label">Geology:</td>
        <td class="val">${target.geology}</td>
      </tr>
      <tr>
        <td class="label">NASA Data:</td>
        <td class="val">${target.nasaDatasets[0]}</td>
      </tr>
    </table>
  `;

  // Render Modal Radar
  initCompRadarChart(analog, target);
}

function initCompRadarChart(analog, target) {
  const ctx = document.getElementById("compRadarChart");
  if (!ctx) return;

  if (AppState.compRadarChart) {
    AppState.compRadarChart.destroy();
  }

  AppState.compRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Topography & Slope", "Geochemistry & Minerals", "Thermal / Climate", "Regolith Tractions", "Mission Fidelity"],
      datasets: [
        {
          label: `Earth: ${analog.name.split("&")[0]}`,
          data: [
            analog.scores.topography,
            analog.scores.mineralogy,
            analog.scores.environment,
            analog.scores.regolith,
            analog.scores.missionUtility
          ],
          backgroundColor: "rgba(0, 230, 118, 0.2)",
          borderColor: "#00e676",
          pointBackgroundColor: "#00e676"
        },
        {
          label: `${target.body}: ${target.name}`,
          data: [90, 88, 85, 92, 95],
          backgroundColor: "rgba(255, 87, 34, 0.2)",
          borderColor: "#ff5722",
          pointBackgroundColor: "#ff5722"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: "rgba(255, 255, 255, 0.1)" },
          grid: { color: "rgba(255, 255, 255, 0.08)" },
          pointLabels: {
            color: "#94a3b8",
            font: { size: 9, family: "'Inter', sans-serif" }
          },
          ticks: { display: false, min: 40, max: 100 }
        }
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "#fff", font: { size: 10 } }
        }
      }
    }
  });
}

/* ==========================================================================
   5. TOPOGRAPHIC TRANSECT SIMULATOR (HTML5 Canvas)
   ========================================================================== */
function openTopoModal() {
  openModal("modalTopo");
  setTimeout(drawTopoProfile, 100);
}

function setupTopoCanvas() {
  const select = document.getElementById("selectTopoProfile");
  if (select) {
    select.addEventListener("change", drawTopoProfile);
  }
}

function drawTopoProfile() {
  const canvas = document.getElementById("topoCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = canvas.parentElement.clientWidth - 32);
  const height = (canvas.height = 200);

  ctx.clearRect(0, 0, width, height);

  const profileType = document.getElementById("selectTopoProfile")?.value || "crater";

  // Grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Draw comparison profiles
  if (profileType === "crater") {
    // 1. Earth Analog: Haughton Crater Rim Transect (Green)
    drawCurve(ctx, width, height, "#00e676", "rgba(0, 230, 118, 0.12)", (xNorm) => {
      // Crater bowl with rim peaks
      const d = Math.abs(xNorm - 0.5) * 2;
      return 0.7 - Math.sin(d * Math.PI) * 0.45 + (Math.sin(xNorm * 30) * 0.02);
    }, "Earth: Haughton Crater");

    // 2. Extraterrestrial: Shackleton Crater Rim (Cyan)
    drawCurve(ctx, width, height, "#00e5ff", "rgba(0, 229, 255, 0.08)", (xNorm) => {
      const d = Math.abs(xNorm - 0.5) * 2;
      return 0.85 - Math.sin(d * Math.PI) * 0.6 + (Math.sin(xNorm * 50) * 0.015);
    }, "Moon: Shackleton Rim (LOLA 5m DEM)");
  } else if (profileType === "lavatube") {
    // Subsurface tube cavern
    drawCurve(ctx, width, height, "#00e676", "rgba(0, 230, 118, 0.12)", (xNorm) => {
      if (xNorm > 0.35 && xNorm < 0.65) {
        return 0.35 + Math.sin((xNorm - 0.35) / 0.3 * Math.PI) * 0.4;
      }
      return 0.35 + (Math.sin(xNorm * 20) * 0.02);
    }, "Earth: Lanzarote Lava Trench");

    drawCurve(ctx, width, height, "#00e5ff", "rgba(0, 229, 255, 0.08)", (xNorm) => {
      if (xNorm > 0.4 && xNorm < 0.6) {
        return 0.32 + Math.sin((xNorm - 0.4) / 0.2 * Math.PI) * 0.5;
      }
      return 0.32 + (Math.sin(xNorm * 30) * 0.01);
    }, "Moon: Marius Hills Pit (LROC Stereo)");
  } else if (profileType === "dune") {
    // Eolian dunes
    drawCurve(ctx, width, height, "#00e676", "rgba(0, 230, 118, 0.12)", (xNorm) => {
      return 0.5 + Math.sin(xNorm * 10) * 0.25 + Math.sin(xNorm * 40) * 0.04;
    }, "Earth: Wadi Rum Sand Dunes");

    drawCurve(ctx, width, height, "#ff5722", "rgba(255, 87, 34, 0.12)", (xNorm) => {
      return 0.55 + Math.sin((xNorm + 0.1) * 10) * 0.28 + Math.sin(xNorm * 60) * 0.02;
    }, "Mars: Gale Crater Dunes (HiRISE DTM)");
  } else {
    // Maar explosion crater
    drawCurve(ctx, width, height, "#00e676", "rgba(0, 230, 118, 0.12)", (xNorm) => {
      const d = Math.abs(xNorm - 0.5) * 2;
      return 0.65 - Math.cos(d * Math.PI * 0.5) * 0.45;
    }, "Earth: Kilbourne Hole Maar");

    drawCurve(ctx, width, height, "#00e5ff", "rgba(0, 229, 255, 0.08)", (xNorm) => {
      const d = Math.abs(xNorm - 0.5) * 2;
      return 0.7 - Math.cos(d * Math.PI * 0.5) * 0.5;
    }, "Moon: Artemis Highland Rim");
  }
}

function drawCurve(ctx, width, height, strokeColor, fillColor, fn, label) {
  ctx.beginPath();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2.5;

  for (let x = 0; x <= width; x += 2) {
    const xNorm = x / width;
    const yNorm = fn(xNorm);
    const y = yNorm * height;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Fill area under curve
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();

  // Label
  ctx.fillStyle = strokeColor;
  ctx.font = "10px Inter, sans-serif";
  const labelY = strokeColor === "#00e676" ? 20 : 36;
  ctx.fillText(label, 15, labelY);
}

/* ==========================================================================
   6. NASA OPEN DATA DIRECTORY RENDERING
   ========================================================================== */
function renderOpenDataDirectory() {
  const container = document.getElementById("openDataListContainer");
  if (!container) return;

  container.innerHTML = NASA_OPEN_RESOURCES.map((res) => `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <h4 style="font-size: 0.9rem; color: #fff;">${res.name}</h4>
          <span class="badge-nasa" style="font-size: 0.65rem;">${res.domain}</span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4;">${res.description}</p>
      </div>
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn btn-cyan" style="flex-shrink: 0; font-size: 0.72rem; padding: 0.4rem 0.75rem;">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Portal
      </a>
    </div>
  `).join("");
}
