# TERRA-LUNA: Planetary Surface Analog Discovery & Characterization Engine
## NASA Space Apps Challenge 2026 Pitch Deck (Strictly 7 Slides)

---

### Slide 1: Title & Introduction
- **Slide Title:** TERRA-LUNA
- **Subtitle:** Planetary Surface Analog Discovery & Characterization Engine
- **Challenge:** Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars
- **Team Name:** Archimedes
- **Event:** NASA Space Apps Challenge 2026
- **Visuals:** Dark space obsidian theme with interconnected Earth, Moon (Artemis South Pole), and Mars telemetry nodes.
- **Key Message:** "Bridging Earth and the Cosmos: Data-Driven Planetary Analogs for Artemis and Mars."
- **Speaker Notes:** "Good day judges. We are Team Archimedes, and we present TERRA-LUNA, an open-data geospatial platform identifying and characterizing Earth locations that analog future permanent bases on the Moon and Mars."

---

### Slide 2: The Challenge & The Problem
- **Slide Title:** The Problem: Why Terrestrial Analogs are Urgent Yet Under-Characterized
- **Key Points:**
  - **High Mission Stakes:** Artemis III/IV and Mars missions require landing site testing (craters, lava tubes, ice deposits) before astronauts fly.
  - **Fragmented Data:** Terrestrial analog sites (e.g., Atacama, Haughton Crater) have historically been chosen based on qualitative visual resemblance rather than quantitative, multi-sensor data.
  - **Incomplete Characterization:** Critical operational variables—such as regolith friction, UV sterilization, and subsurface ice stability—are not standardized into an accessible open tool.
- **Visuals:** Comparison photo of Apollo 11 training in Iceland vs. LRO South Pole imagery.
- **Speaker Notes:** "Before we land on Shackleton Crater or Jezero, we must test rovers, spacesuits, and drills on Earth. But until now, terrestrial analog knowledge has been fragmented, subjective, and difficult to query."

---

### Slide 3: The Solution: TERRA-LUNA
- **Slide Title:** The Solution: An Open-Data Geospatial Intelligence Platform
- **Key Points:**
  - **Standardized Multi-Sensor Framework:** Integrates open NASA, ESA, and USGS orbital and terrestrial datasets.
  - **Comprehensive Catalog:** Characterizes 12 high-fidelity terrestrial analogs across polar deserts, volcanic fields, subterranean lava tubes, and hydrothermal systems.
  - **Direct Extraterrestrial Matching:** Maps terrestrial locations directly to designated Artemis base candidates (Shackleton Rim, Marius Hills) and Mars exploration zones (Jezero Delta, Utopia Planitia).
  - **Accessible to All:** Zero-install, high-performance web dashboard available freely to scientists, mission planners, and educators.
- **Visuals:** Screenshot of the TERRA-LUNA interactive Leaflet map with dark-mode aesthetic and analog bridge arcs.
- **Speaker Notes:** "TERRA-LUNA solves this by unifying open planetary datasets into an interactive geospatial engine that characterizes Earth analogs with mathematical rigor."

---

### Slide 4: Scientific Methodology: 5-Axis Planetary Similarity Index
- **Slide Title:** Scientific Scoring: The 5-Axis Planetary Similarity Algorithm
- **Formula:**
  $$\text{Fidelity Index} = w_1 S_{\text{topo}} + w_2 S_{\text{min}} + w_3 S_{\text{env}} + w_4 S_{\text{reg}} + w_5 S_{\text{util}}$$
- **The 5 Core Dimensions:**
  1. **Topography & Slope ($S_{\text{topo}}$):** LOLA/MOLA vs ASTER DEM elevation variance & roughness.
  2. **Mineralogical Fidelity ($S_{\text{min}}$):** CRISM & Landsat/EMIT spectra matching basalt, clays, sulfates, and silica.
  3. **Environmental Extremes ($S_{\text{env}}$):** Diviner & MODIS thermal ranges, aridity, and UV exposure.
  4. **Regolith Mechanics ($S_{\text{reg}}$):** Grain size distribution, cohesion, and wheel sinkage friction.
  5. **Mission Utility ($S_{\text{util}}$):** Testing EVA spacesuits, rover autonomy, ISRU ice coring, or lava tube habitats.
- **Visuals:** Dynamic Radar Chart showing Askja Caldera vs Marius Hills Pit (94% composite fidelity).
- **Speaker Notes:** "Our proprietary 5-Axis Planetary Similarity Index replaces guesswork with quantifiable scoring across topography, mineralogy, environment, regolith mechanics, and mission utility."

---

### Slide 5: Core Features & User Experience
- **Slide Title:** System Architecture & Interactive Capabilities
- **Key Features:**
  - **Geospatial Map & Dynamic Arcs:** Esri Dark Gray & Satellite views with geodesic links between Earth and planetary bodies.
  - **Dual Telemetry Comparative Matrix:** Head-to-head parameter comparison of any Earth analog with any Lunar or Martian target.
  - **Topographic Transect Simulator:** HTML5 Canvas cross-section engine visualizing crater rim slopes and obstacle densities.
  - **Mission Briefing Exporter:** One-click generation of printable field dossiers with logistics and NASA dataset links.
- **Visuals:** Collage of Dual Telemetry modal, Topographic Transect simulator, and dossier export preview.
- **Speaker Notes:** "Users can filter analogs by terrain or mission objective, inspect deep dossiers, run side-by-side comparative telemetry, and simulate topographic slope traverses in real time."

---

### Slide 6: Open NASA & Space Agency Data Integration
- **Slide Title:** Powered by Open Science: Data Sources & Provenance
- **NASA Data Products:**
  - **Lunar Reconnaissance Orbiter (LRO):** LOLA topography DEMs & Diviner thermal bolometer data.
  - **Mars Reconnaissance Orbiter (MRO):** CRISM mineralogy cubes & HiRISE 25cm/px DTMs.
  - **Earth Science (EOSDIS):** Landsat 8/9 OLI/TIRS, Terra MODIS, ASTER Global DEM, and ISS EMIT hyperspectral data.
- **International Partner Data:**
  - **ESA:** Copernicus Sentinel-2 MSI & PANGAEA astronaut cave training archive.
  - **JAXA:** SELENE (Kaguya) Lunar Radar Sounder (LRS) lava tube detection data.
  - **USGS:** 3DEP 0.5m LiDAR models and Astrogeology Planetary GIS maps.
- **Visuals:** Logos and satellite trajectory diagrams of LRO, MRO, Terra, and Copernicus.
- **Speaker Notes:** "Every analog score is grounded in verifiable, open-access datasets from NASA PDS, Earthdata, ESA, and JAXA, ensuring total transparency and reproducibility."

---

### Slide 7: Mission Impact, Future Roadmap & Team
- **Slide Title:** Impact: De-Risking Humanity's Next Giant Leap
- **Mission Impact:**
  - **For Artemis:** Identifies optimal astronaut geology training sites (Kilbourne Hole, Iceland, Lanzarote).
  - **For Mars Exploration:** Highlights critical locations for testing drill mechanisms on subsurface ice (McMurdo Dry Valleys) and clay biosignature sensors (Atacama).
  - **Roadmap:** Machine-learning automated candidate detection, crowdsourced expedition field logging, and integration with NASA Web WorldWind.
- **Team Archimedes:** Passionate multidisciplinary innovators dedicated to open space exploration.
- **Live Demo Link:** `https://github.com/NASA-SpaceApps-Archimedes/TERRA-LUNA`
- **Speaker Notes:** "By unlocking Earth's planetary secrets, TERRA-LUNA empowers scientists and astronauts to train effectively before leaving Earth. Thank you, and we welcome your questions!"
