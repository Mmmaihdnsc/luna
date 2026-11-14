# NASA Space Apps Challenge 2026 - Official Submission Package

**Challenge Title:** Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars  
**Team Name:** Archimedes  
**Project Title:** TERRA-LUNA: Planetary Surface Analog Discovery & Characterization Engine  

---

## 1. Project Summary (Suggested 50–200 Words)

> **Word Count:** 142 words (Complies strictly with 50–200 word guideline)

Selecting future permanent landing sites and habitat locations on the Moon (such as Artemis South Pole peaks and Marius Hills lava tubes) and Mars (such as Jezero Crater and Utopia Planitia) requires mission teams to rigorously test rovers, spacesuits, and drill systems before launch. While places like the Atacama Desert and Haughton Crater are renowned, terrestrial analogs remain incomplete, fragmented, and inadequately characterized.

We developed **TERRA-LUNA**, an open-data geospatial intelligence platform that characterizes and visualizes Earth locations analogous to extraterrestrial bases. By harmonizing orbital data from NASA (LRO LOLA, Diviner, MRO CRISM/HiRISE, Earthdata SRTM/MODIS/EMIT) and partner agencies, TERRA-LUNA calculates a multi-parametric 5-axis Planetary Similarity Index across topography, mineralogy, thermal extremes, regolith friction, and mission utility. The platform features an interactive dark-mode geospatial dashboard, side-by-side dual telemetry, topographic transect simulators, and exportable mission dossiers to de-risk future planetary exploration.

---

## 2. Project Details

### What does it do or how does it work?
TERRA-LUNA is an interactive geospatial intelligence and decision-support platform designed for planetary scientists, aerospace engineers, and mission planners.
1. **Multi-Parametric Similarity Algorithm:** It processes multi-spectral, topographic, and environmental sensor data to score Earth sites against lunar and Martian targets across five quantitative axes:
   - **Topography & Slope ($S_{topo}$):** Elevation variance, roughness RMS, and traversability slopes computed from LOLA/MOLA and ASTER/SRTM.
   - **Mineralogical & Chemical Fidelity ($S_{min}$):** Hyperspectral matching of basalt, hydrated clays, sulfates, and silica using MRO CRISM, Landsat 8/9, and EMIT.
   - **Environmental Extremes ($S_{env}$):** Diurnal temperature range, aridity index, and solar radiation flux from Diviner, MODIS, and ECOSTRESS.
   - **Regolith & Traction Mechanics ($S_{reg}$):** Particle size distribution, cohesion, and friction angles for rover wheels and boot treads.
   - **Mission Subsystem Utility ($S_{util}$):** Operational applicability for spacesuit EVA, autonomous navigation, ISRU drilling, and cave habitat construction.
2. **Interactive Planetary Map & Telemetry Dashboard:** Built using Leaflet.js with CartoDB Dark Matter and Esri High-Resolution Satellite layers, featuring glowing status pins, dynamic geodesic connection arcs ("Analog Bridges"), and real-time category filtering.
3. **Dual Telemetry Comparative Matrix:** Allows instantaneous side-by-side evaluation of any Earth analog against any Lunar or Martian target, generating dynamic multi-axis radar charts and parameter delta tables.
4. **Topographic Transect Simulator:** An interactive cross-section simulator visualizing terrain slope profiles and obstacle hazards for rover traverses.
5. **Mission Briefing Exporter:** Formats and exports printable, high-density scientific dossiers for field expedition teams.

### What benefits does it have?
- **Reduces Mission Risk & Cost:** Field-testing hardware in high-fidelity terrestrial environments prevents catastrophic failures on the lunar surface or Mars.
- **Unified Scientific Framework:** Replaces subjective "looks similar" comparisons with mathematically weighted, multi-sensor similarity scores.
- **Expands the Global Analog Catalog:** Moves beyond a few famous sites to characterize underutilized and newly emerging analogs (e.g., Askja volcanic tephra, Lanzarote subterranean lava tubes, Kilbourne Hole explosion ejecta, Dallol hydrothermal acid systems).
- **Accelerates Artemis & Mars Architecture:** Directly maps terrestrial sites to designated Artemis landing candidates (Shackleton Rim, Malapert Mountain, Marius Hills Pit) and Mars exploration zones (Jezero Delta, Utopia Planitia ice sheets).

### What is the intended impact of the project?
TERRA-LUNA bridges the gap between planetary remote sensing and terrestrial field campaigns. Its intended impact is to provide NASA, international space agencies, private space exploration companies (commercial lunar payload providers), and academic research consortia with a standardized, data-driven instrument to select, justify, and plan analog test missions. Furthermore, it serves as an educational tool inspiring the public and students to understand the planetary geology of our own home planet.

### What tools, coding languages, hardware, or software did you use?
- **Languages & Core Tech:** HTML5, CSS3 (Custom NASA Mission Control Glassmorphism UI), JavaScript (ES6+), Python 3.11 (data formatting, validation, and local server orchestration).
- **Mapping & Geospatial Libraries:** Leaflet.js (v1.9.4), CartoDB Dark Matter API, Esri World Imagery Satellite tiles.
- **Data Visualization:** Chart.js (multi-dimensional radar charts), HTML5 Canvas API (interactive topographic transect simulator).
- **Typography & Icons:** Google Fonts (Orbitron, Inter, Space Mono), FontAwesome 6.4.
- **Data Formats:** GeoJSON and structured JSON catalogs compatible with GIS and NASA PDS pipelines.

### How is your project creative?
Rather than presenting a static list or dry spreadsheet of coordinates, TERRA-LUNA introduces:
1. **Dynamic "Analog Arcs":** Visual geodesic trajectories connecting Earth analog locations directly to their planetary lunar/Martian counterparts on the map.
2. **Interactive Topographic Transect Simulator:** Allowing users to visually compare cross-sectional slope gradients of lunar crater walls (LOLA) with terrestrial impact craters (Haughton) in real time.
3. **Mission Control Aesthetic:** An aerospace telemetry dashboard with real-time score rings, dark-mode night-vision styling, and interactive radar comparisons.
4. **Dual Telemetry Engine:** An intuitive matchmaker that calculates and displays real-time parametric deltas between Earth and extraterrestrial worlds.

### What factors did your team consider?
Our team conducted a holistic cross-disciplinary analysis considering:
- **Geomorphology & Volcanology:** Basaltic flood lavas, tephra sand dunes, maar craters, and subterranean lava tubes.
- **Mineralogy & Spectroscopy:** Visible to short-wave infrared (SWIR) absorption features of pyroxene, olivine, anorthosite, and hydrated silica/sulfates.
- **Subsurface Ice & Volatiles:** Cryogenic ground ice preservation and sublimation physics in Antarctic polar deserts compared with Martian permafrost.
- **Logistics & Accessibility:** Travel times, extreme environment safety, active research infrastructure, and permit requirements for scientific field campaigns.
- **Human Factors & Operational Realism:** Communication delays, isolation psychology, and spacesuit glove dexterity in abrasive rocky terrain.

---

## 3. NASA Data Links (Link Text & URL)

| # | Link Text | Link URL |
|---|-----------|----------|
| 1 | NASA Planetary Data System (PDS) | `https://pds.nasa.gov/` |
| 2 | LRO LOLA (Lunar Orbiter Laser Altimeter) Topography | `https://pds-geosciences.wustl.edu/missions/lro/lola.htm` |
| 3 | LRO Diviner Lunar Radiometer Experiment (Thermal) | `https://diviner.ucla.edu/` |
| 4 | MRO CRISM (Compact Reconnaissance Imaging Spectrometer for Mars) | `https://crism.jhuapl.edu/` |
| 5 | MRO HiRISE (High Resolution Imaging Science Experiment) | `https://hirise.lpl.arizona.edu/` |
| 6 | NASA Earthdata & GIBS (Global Imagery Browse Services) | `https://www.earthdata.nasa.gov/` |
| 7 | NASA EMIT (Earth Surface Mineral Dust Source Investigation) | `https://earth.jpl.nasa.gov/emit/` |
| 8 | USGS Astrogeology Science Center (Planetary GIS & Artemis Maps) | `https://astrogeology.usgs.gov/` |

---

## 4. Space Agency Partner & Other Data Links

| # | Link Text | Link URL |
|---|-----------|----------|
| 1 | ESA Copernicus Sentinel-2 Multi-Spectral Imagery | `https://browser.dataspace.copernicus.eu/` |
| 2 | ESA PANGAEA Planetary Field Training Dataset | `https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/CAVES_and_PANGAEA` |
| 3 | JAXA SELENE (Kaguya) Lunar Orbiter Data Archive | `https://darts.isas.jaxa.jp/planet/pdap/selene/` |
| 4 | USGS 3D Elevation Program (3DEP) High-Resolution LiDAR | `https://www.usgs.gov/3d-elevation-program` |
| 5 | Esri ArcGIS Open Geospatial Basemaps | `https://www.arcgis.com/` |
| 6 | Leaflet Open-Source Interactive Map Library | `https://leafletjs.com/` |

---

## 5. Use of Super Intelligence (SI) Declaration

In accordance with NASA Space Apps Challenge guidelines:
- **Did your project use Super Intelligence (SI) tools?**  
  *Yes.*
- **Where and how SI tools were utilized:**  
  *Code and Data Generation:* Large language foundation models (Gemini) were utilized to assist with code scaffolding (HTML5/CSS/JavaScript structure), cross-referencing and compiling open scientific literature parameters for Earth/Moon/Mars sites, and drafting descriptive text for submission documentation.  
  *No proprietary or copyrighted NASA branding, flags, or mission logos were modified or generated.* All scientific datasets and satellite mission links reference legitimate public NASA and space agency repositories.

---

## 6. Project Demonstration

### 🌟 Live Interactive Presentation (Opens Immediately in Browser):
**Direct Presentation URL for Form:**  
👉 `https://mmmaihdnsc.github.io/luna/slides.html`

*(Judges can click this link to open the full 7-slide presentation directly in their browser with slide transitions, speaker notes, and fullscreen mode. The offline PowerPoint file is also available at `https://github.com/Mmmaihdnsc/luna/blob/main/TERRA-LUNA_Presentation.pptx`)*

---

## 7. Public Project Links

- **Project Demonstration (Direct Browser Presentation):**  
  `https://mmmaihdnsc.github.io/luna/slides.html`

- **Project (Public Code Repository):**  
  `https://github.com/Mmmaihdnsc/luna`

- **Live Geospatial App / Tool (GitHub Pages):**  
  `https://mmmaihdnsc.github.io/luna/`
