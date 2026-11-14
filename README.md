# 🛰️ TERRA-LUNA: Planetary Surface Analog Discovery & Characterization Engine

[![NASA Space Apps Challenge 2026](https://img.shields.io/badge/NASA%20Space%20Apps-2026-blue.svg)](https://www.spaceappschallenge.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Status: Operational](https://img.shields.io/badge/Status-Operational%20v1.0-00e5ff.svg)]()
[![Open Data: NASA PDS](https://img.shields.io/badge/Data-NASA%20PDS%20%7C%20Earthdata-ff5722.svg)](https://pds.nasa.gov/)

> **NASA Space Apps Challenge 2026**  
> **Challenge:** *Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars*  
> **Team:** *Archimedes*  
> **Live Demo:** [Launch TERRA-LUNA Dashboard](https://github.com/your-username/TERRA-LUNA)

---

## 🌌 Overview

Selecting future permanent base locations on the **Moon** (*e.g., Artemis South Pole Shackleton Crater Rim, Marius Hills Subsurface Lava Tubes*) and **Mars** (*e.g., Jezero Crater Delta, Utopia Planitia Subsurface Ice Sheets*) depends critically on rigorous pre-flight testing. Terrestrial analog environments—places on Earth that share topographic, mineralogical, and climatic conditions with extraterrestrial surfaces—allow engineering teams to stress-test rovers, spacesuit joints, cryogenic drills, and life support systems.

However, historical analog site selection has often been qualitative, isolated, and under-characterized. **TERRA-LUNA** unifies open Earth, Moon, and Mars orbital datasets from NASA, ESA, JAXA, and USGS into a quantitative, interactive geospatial intelligence dashboard.

```
       [ NASA LRO LOLA / Diviner ]       [ Mars MRO CRISM / HiRISE ]
                     \                         /
                      \                       /
                       ▼                     ▼
           ┌──────────────────────────────────────────────┐
           │      TERRA-LUNA Multi-Parametric Engine      │
           │  5-Axis Planetary Similarity Score ($S_i$)   │
           └──────────────────────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
  [ Interactive Map ]    [ Dual Telemetry ]    [ Topo Transect Simulator ]
```

---

## 🌟 Key Features

- 🗺️ **Interactive Planetary Analog Map:**
  - Dark-mode aerospace aesthetic built with Leaflet.js, CartoDB Dark Matter, and Esri High-Resolution Satellite imagery.
  - Interactive "Analog Bridges" (geodesic arcs) visually linking Earth training sites to Artemis lunar landing zones and Martian rover targets.
  - Category and mission objective filters (Volcanic Basalts, Polar Cold Deserts, Lava Tubes & Caves, Hyper-Arid Deserts, Maar/Impact Craters).
- 📊 **5-Axis Planetary Similarity Index:**
  - Multi-dimensional scoring across:
    1. **Topography & Slope ($S_{topo}$):** LOLA/MOLA vs ASTER elevation variance and surface roughness.
    2. **Mineralogical & Chemical Fidelity ($S_{min}$):** Hyperspectral matching of basalt, clays, sulfates, and silica.
    3. **Environmental Extremes ($S_{env}$):** Thermal ranges, aridity index, and UV radiation flux.
    4. **Regolith Mechanics ($S_{reg}$):** Particle size distribution and shear traction.
    5. **Mission Utility ($S_{util}$):** Relevance for spacesuit EVA, autonomous navigation, ISRU drilling, and cave shelters.
- ⚡ **Side-by-Side Dual Telemetry Matrix:**
  - Select any Earth analog and extraterrestrial target to inspect parametric deltas and dynamic radar charts.
- 🏔️ **Topographic Transect Simulator:**
  - Real-time HTML5 Canvas cross-section engine visualizing crater rim slopes, lava tube collapse trenches, and sand dune hazard profiles.
- 📄 **Mission Briefing Exporter:**
  - One-click print-to-PDF mission dossier generator formatted for field science and operational teams.
- 🛰️ **NASA Open Data Directory:**
  - Direct integration and links to NASA Planetary Data System (PDS), LRO LOLA, Diviner, MRO CRISM, HiRISE, Earthdata GIBS, and ISS EMIT.

---

## 🪐 Cataloged Analog Sites & Target Matchings

| Earth Terrestrial Analog | Classification | Extraterrestrial Match | Similarity Score | Primary Mission Test Application |
|---|---|---|:---:|---|
| **Askja Caldera & Holuhraun (Iceland)** | Volcanic & Basaltic | Marius Hills Pit (Moon) & Olympus Mons (Mars) | **94%** | Abrasive basaltic regolith & rover locomotion |
| **McMurdo Dry Valleys (Antarctica)** | Polar Cold Desert | Utopia Planitia (Mars) & Shackleton PSR (Moon) | **96%** | Cryogenic subsurface ice drilling & astrobiology |
| **Atacama Desert - Yungay (Chile)** | Hyper-Arid Desert | Jezero & Gale Craters (Mars) | **95%** | Soil perchlorates, UV sterilization & drill caching |
| **Haughton Impact Crater (Devon Island)** | Impact Crater & Polar | Shackleton Crater Rim (Moon) | **93%** | Crater rim traverses, impact breccia EVA sampling |
| **Lanzarote Lava Tubes (Canary Islands)** | Lava Tubes & Caves | Marius Hills Skylight & Cave (Moon) | **92%** | Subterranean radiation shielding & micro-drones |
| **Mauna Loa & Ka'u Desert (Hawaii)** | Volcanic Basalt | Lunar Mare & Tharsis Plains | **91%** | Long-duration human confinement & EVA suits |
| **Danakil Depression & Dallol (Ethiopia)** | Hydrothermal & Saline | Early Mars Hydrothermal Springs | **89%** | Acid-sulfate brine astrobiology & drill corrosion |
| **Wadi Rum Red Sandstone (Jordan)** | Arid Eolian Regolith | Gale Crater Dune Fields (Mars) | **91%** | Rover wheel sinkage in iron-oxide sands |
| **Kilbourne Hole Maar (New Mexico, USA)** | Maar Explosion Crater | Artemis South Pole Highland Rims | **93%** | Artemis astronaut geology field traverse training |
| **Craters of the Moon (Idaho, USA)** | Flood Basalt Plain | Oceanus Procellarum (Moon) | **90%** | Chaotic aa lava obstacle navigation |
| **Brimstone Basin (Yellowstone, USA)** | Hydrothermal Silica | Jezero Silica & Gusev Home Plate | **91%** | Hydrothermal biosignature preservation testing |
| **Svalbard Spitsbergen (Norway)** | Polar Glacio-Volcanic | Mars Polar Caps & Subglacial Basalts | **92%** | Arctic rover testing & extremophile detection |

---

## 🚀 Quickstart & Local Setup

TERRA-LUNA runs directly in any modern web browser without requiring complex npm or build environments.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/TERRA-LUNA.git
cd TERRA-LUNA
```

### 2. Run with Python (Recommended)
```bash
# Launch a lightweight local server
python -m http.server 8000
```
Then open your browser to: `http://localhost:8000`

### 3. Or Simply Open `index.html`
You can double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari!

---

## 📡 NASA & Space Agency Data Resources

This project is built strictly on open-access, publicly available datasets:

1. **NASA Planetary Data System (PDS):** [https://pds.nasa.gov/](https://pds.nasa.gov/)
2. **LRO LOLA Digital Elevation Models:** [https://pds-geosciences.wustl.edu/missions/lro/lola.htm](https://pds-geosciences.wustl.edu/missions/lro/lola.htm)
3. **LRO Diviner Lunar Radiometer Experiment:** [https://diviner.ucla.edu/](https://diviner.ucla.edu/)
4. **MRO CRISM Spectral Library:** [https://crism.jhuapl.edu/](https://crism.jhuapl.edu/)
5. **MRO HiRISE High-Resolution Imaging:** [https://hirise.lpl.arizona.edu/](https://hirise.lpl.arizona.edu/)
6. **NASA Earthdata & GIBS:** [https://www.earthdata.nasa.gov/](https://www.earthdata.nasa.gov/)
7. **NASA EMIT ISS Hyperspectral Mineralogy:** [https://earth.jpl.nasa.gov/emit/](https://earth.jpl.nasa.gov/emit/)
8. **USGS Astrogeology Science Center:** [https://astrogeology.usgs.gov/](https://astrogeology.usgs.gov/)
9. **ESA Copernicus Sentinel-2:** [https://browser.dataspace.copernicus.eu/](https://browser.dataspace.copernicus.eu/)
10. **JAXA SELENE (Kaguya) Lunar Data Archive:** [https://darts.isas.jaxa.jp/planet/pdap/selene/](https://darts.isas.jaxa.jp/planet/pdap/selene/)

---

## 👥 Team Archimedes

Developed with passion for the **2026 NASA Space Apps Challenge**.
- Open Science & Aerospace Innovation
- For questions or collaboration, connect via [NASA Space Apps Connect](https://github.com/nasa/spaceapps).

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
