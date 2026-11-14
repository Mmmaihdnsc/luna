/**
 * TERRA-LUNA: Planetary Surface Analog Discovery & Characterization Engine
 * NASA Space Apps Challenge 2026
 * Comprehensive Open Data Catalog for Terrestrial, Lunar, and Martian Sites
 */

const PLANETARY_TARGETS = [
  {
    id: "moon-shackleton",
    name: "Shackleton Crater Rim",
    body: "Moon",
    mission: "Artemis III / IV Base Camp",
    coordinates: "89.9° S, 0.0° E",
    lat: -89.9,
    lng: 0.0,
    elevation: "+1,200 m (rim peak)",
    tempRange: "-246°C (PSR interior) to -10°C (illuminated rim peak)",
    geology: "Anorthositic highland breccia, volatile-rich regolith, permanently shadowed cold traps",
    keyFeature: "Peaks of eternal light (86-92% illumination) adjacent to ultra-cold volatile/ice traps",
    primaryChallenge: "Extreme cryogenic temperatures, sharp elevation gradients, volatile sampling, solar power positioning",
    nasaDatasets: [
      "LRO LOLA (Lunar Orbiter Laser Altimeter) Topography",
      "LRO Diviner Lunar Radiometer Experiment (Thermal)",
      "LRO LROC NAC (Narrow Angle Camera) High-Res Imaging",
      "LROC ShadowCam (Permanently Shadowed Regions)"
    ]
  },
  {
    id: "moon-malapert",
    name: "Malapert Mountain (Peak)",
    body: "Moon",
    mission: "Artemis Communication & Power Relay",
    coordinates: "85.99° S, 2.93° E",
    lat: -85.99,
    lng: 2.93,
    elevation: "+5,000 m relative to surrounding terrain",
    tempRange: "-180°C to -20°C",
    geology: "Heavily cratered feldspathic highland material, low-slope plateau summit",
    keyFeature: "Direct line-of-sight to Earth for unassisted comms and prolonged continuous solar power",
    primaryChallenge: "Surface rover ascent over 15-20° slopes, long-range traverse planning",
    nasaDatasets: [
      "LRO LOLA Digital Elevation Models (DEM 5m/px)",
      "LRO Diviner Thermal Bolometric Data",
      "Kaguya TC/Orthomap Data"
    ]
  },
  {
    id: "moon-marius",
    name: "Marius Hills Pit & Lava Tube",
    body: "Moon",
    mission: "Subsurface Habitation & Radiation Shelter",
    coordinates: "14.1° N, 56.7° W",
    lat: 14.1,
    lng: -56.7,
    elevation: "-50 m (pit depth), ~65 m diameter",
    tempRange: "-20°C (stable internal cavity temperature year-round)",
    geology: "Thick basaltic mare lava flows, intact subsurface pyroxene/plagioclase basalt roof",
    keyFeature: "Natural shielding from cosmic galactic radiation, solar proton events, and micrometeoroids",
    primaryChallenge: "Vertical ingress/egress robotics, subterranean wireless communications, tethered exploration",
    nasaDatasets: [
      "LRO LROC NAC Stereo Imagery & Pit Models",
      "GRAIL (Gravity Recovery and Interior Laboratory) Subsurface Voids",
      "Kaguya Lunar Radar Sounder (LRS)"
    ]
  },
  {
    id: "mars-jezero",
    name: "Jezero Crater Paleolake & Delta",
    body: "Mars",
    mission: "Perseverance Rover & Mars Sample Return (MSR)",
    coordinates: "18.38° N, 77.58° E",
    lat: 18.38,
    lng: 77.58,
    elevation: "-2,500 m (crater floor)",
    tempRange: "-90°C to +5°C",
    geology: "Smectite clays, Fe/Mg-carbonates, olivine-rich sandstones, deltaic siltstones",
    keyFeature: "Fluvial delta deposits capable of preserving micro-fossil biosignatures from ancient lake",
    primaryChallenge: "Navigating bouldery delta scarps, abrasive dust accumulation, precision sample retrieval",
    nasaDatasets: [
      "MRO CRISM (Compact Reconnaissance Imaging Spectrometer for Mars)",
      "MRO HiRISE (High Resolution Imaging Science Experiment)",
      "Mars Express OMEGA Spectral Data",
      "Mars 2020 SuperCam / PIXL / SHERLOC In-Situ Data"
    ]
  },
  {
    id: "mars-gale",
    name: "Gale Crater & Mount Sharp",
    body: "Mars",
    mission: "Curiosity (MSL) Exploration & Habitability Study",
    coordinates: "5.4° S, 137.8° E",
    lat: -5.4,
    lng: 137.8,
    elevation: "-4,500 m to +5,500 m (Aeolis Mons peak)",
    tempRange: "-100°C to +10°C",
    geology: "Mudstones, hydrated magnesium/calcium sulfates, clay mineral stratigraphy, active eolian dunes",
    keyFeature: "Over 5 km of continuous sedimentary strata documenting transition from wet to arid Mars",
    primaryChallenge: "Wheel puncture risks on ventifact sharp rocks, dune crossing wheel slip",
    nasaDatasets: [
      "MRO HiRISE Digital Terrain Models",
      "MRO CRISM Hyperspectral Cubes",
      "Curiosity CheMin XRD & ChemCam LIBS Libraries"
    ]
  },
  {
    id: "mars-utopia",
    name: "Utopia Planitia Subsurface Ice Basin",
    body: "Mars",
    mission: "Zhurong Rover & Future Human Landing / ISRU Base",
    coordinates: "46.7° N, 117.5° E",
    lat: 46.7,
    lng: 117.5,
    elevation: "-4,100 m",
    tempRange: "-110°C to -15°C",
    geology: "Scalloped depressions, polygonally patterned ground, vast subsurface pure water ice sheet",
    keyFeature: "Subsurface ice deposit estimated larger than Lake Superior beneath 1-10 meters of soil",
    primaryChallenge: "Deep cryogenic coring drills, permafrost geotechnical stability, dust storm survivability",
    nasaDatasets: [
      "MRO SHARAD (Shallow Radar) Dielectric Ice Layer Soundings",
      "Mars Odyssey GRS (Gamma Ray Spectrometer) Water Equivalent Hydrogen",
      "Viking 2 & MRO HiRISE Patterned Ground Imagery"
    ]
  }
];

const EARTH_ANALOGS = [
  {
    id: "analog-askja",
    name: "Askja Caldera & Holuhraun Lava Fields",
    region: "Central Highlands, Iceland",
    coordinates: "65.03° N, 16.75° W",
    lat: 65.03,
    lng: -16.75,
    elevation: "1,100 m",
    climate: "Sub-polar volcanic desert, periglacial",
    tempRange: "-22°C to +12°C",
    category: "Volcanic & Basaltic",
    targetMatchId: "moon-marius",
    targetMatchName: "Marius Hills Pit & Lunar Mare / Olympus Mons",
    scores: {
      overall: 94,
      topography: 92,
      mineralogy: 97,
      environment: 88,
      regolith: 95,
      missionUtility: 96
    },
    keyAnalogs: [
      "Barren aphyric basalt flows mimicking lunar maria and Martian Tharsis plains",
      "Porous basaltic tephra and pumice simulating lunar regolith mechanical friction",
      "Lava tube collapse pits and basaltic fissures identical to lunar sinuous rilles",
      "Historical Apollo astronaut geology training site (Armstrong, Aldrin) & Artemis field tests"
    ],
    missionApplications: [
      "Rover autonomous locomotion on loose basaltic tephra",
      "Lava tube interior LiDAR mapping and tethered drone exploration",
      "Testing space suit joint durability against razor-sharp glass-rich basalt shards"
    ],
    nasaDatasets: [
      "NASA Earthdata ASTER GDEM (Global Digital Elevation Model)",
      "Landsat 8/9 OLI Surface Reflectance",
      "NASA EMIT (Earth Surface Mineral Dust Source Investigation)",
      "LRO LOLA & LROC Comparative Spectral Analysis"
    ],
    fieldLogistics: {
      accessibility: "Moderate (Summer 4x4 access via F910 track)",
      isolationLevel: "High (No permanent settlements within 70 km)",
      activeFacilities: "Iceland Space Agency field expeditions, Dyngjufjöll mountain huts"
    },
    description: "Askja is a large basaltic and rhyolitic caldera complex in the volcanic Icelandic highlands. Its barren, desolate terrain, pristine basaltic lava fields (including the 2014 Holuhraun flood basalt), and total absence of macro-vegetation provide an exact structural and spectroscopic match for young lunar mare deposits and Martian volcanic provinces."
  },
  {
    id: "analog-mcmurdo",
    name: "McMurdo Dry Valleys (Beacon & University Valleys)",
    region: "Victoria Land, Antarctica",
    coordinates: "77.85° S, 160.85° E",
    lat: -77.85,
    lng: 160.85,
    elevation: "1,650 m",
    climate: "Hyper-arid polar desert (driest, coldest desert on Earth)",
    tempRange: "-62°C to -10°C",
    category: "Polar Cold Desert & Permafrost",
    targetMatchId: "mars-utopia",
    targetMatchName: "Mars Utopia Planitia & Lunar South Pole PSR",
    scores: {
      overall: 96,
      topography: 90,
      mineralogy: 94,
      environment: 99,
      regolith: 96,
      missionUtility: 98
    },
    keyAnalogs: [
      "Dry permafrost with subterranean water ice table insulated by dry regolith mantle",
      "Sub-zero vapor-pressure equilibrium mimicking Mars ice sublimation dynamics",
      "Endolithic microbial colonies sheltered inside porous sandstones under intense UV",
      "Katabatic wind erosion creating Martian-type ventifacts and stone pavements"
    ],
    missionApplications: [
      "Cryogenic automated deep-drilling systems for Artemis & Mars ISRU",
      "Subsurface ground-penetrating radar calibration against buried glacial ice",
      "Planetary protection and life detection biomarker verification"
    ],
    nasaDatasets: [
      "NASA MODIS Terra/Aqua Land Surface Temperature (LST)",
      "NASA Operation IceBridge Airborne Topographic Mapper",
      "Mars Odyssey GRS Subsurface Hydrogen Correlation",
      "MRO SHARAD Radar Reflection Calibration"
    ],
    fieldLogistics: {
      accessibility: "Challenging (LC-130 Hercules & helicopter from McMurdo Station)",
      isolationLevel: "Extreme (Antarctic Treaty Protected Area)",
      activeFacilities: "NSF / NASA polar research field camps"
    },
    description: "The McMurdo Dry Valleys represent the closest terrestrial climatic analogue to the surface of Mars. Swept by fierce 200 mph katabatic winds, free of snow cover, and hosting dry permafrost over ancient glacier ice, they recreate the desiccating cold, sublimation physics, and subsurface ice stability conditions of Mars' high latitudes and Lunar polar craters."
  },
  {
    id: "analog-atacama",
    name: "Atacama Desert (Yungay Hyper-Arid Core)",
    region: "Antofagasta Region, Chile",
    coordinates: "24.08° S, 69.95° W",
    lat: -24.08,
    lng: -69.95,
    elevation: "1,050 m",
    climate: "Hyper-arid subtropical desert (< 1 mm/yr rainfall)",
    tempRange: "-2°C to +38°C",
    category: "Hyper-Arid Desert",
    targetMatchId: "mars-jezero",
    targetMatchName: "Jezero Crater & Gale Crater (Mars)",
    scores: {
      overall: 95,
      topography: 89,
      mineralogy: 98,
      environment: 96,
      regolith: 94,
      missionUtility: 97
    },
    keyAnalogs: [
      "High concentration of perchlorates, nitrates, and sulfates identical to Martian regolith",
      "Intense solar UV radiation (UV Index regularly > 14) and oxidants sterilizing upper soil layers",
      "Extreme clay mineral desiccation and halite/gypsum salt crust morphologies",
      "Decades-long testing ground for NASA Mars rover drills and spectrometers"
    ],
    missionApplications: [
      "Testing autonomous sample caching and wet chemistry bio-detection (e.g., MOXIE/SHERLOC)",
      "Long-range autonomous rover traverse navigation across duricrust and loose regolith",
      "Testing dust ingress seals and photovoltaic solar panel dust-clearing mechanisms"
    ],
    nasaDatasets: [
      "Landsat 8/9 Thermal Infrared Sensor (TIRS)",
      "NASA Earthdata ECOSTRESS Thermal Evapotranspiration",
      "MRO CRISM & Curiosity CheMin Laboratory Calibration Standards",
      "Sentinel-2 MSI Multi-Spectral Reflectance"
    ],
    fieldLogistics: {
      accessibility: "High (Accessible from Antofagasta via Route 5)",
      isolationLevel: "High (Remote arid plateaus, minimal light pollution)",
      activeFacilities: "Paranal Observatory, NASA/ESA field campaign stations"
    },
    description: "The hyper-arid core of the Atacama Desert has received virtually no rain for millennia. Its oxidized, perchlorate-enriched soil chemistry, high UV flux, and lack of organic carbon make it the gold standard benchmark for Martian surface chemistry, soil reactivity, and astrobiological life-detection instruments."
  },
  {
    id: "analog-haughton",
    name: "Haughton Impact Crater (Devon Island)",
    region: "Nunavut, High Arctic, Canada",
    coordinates: "75.38° N, 89.68° W",
    lat: 75.38,
    lng: -89.68,
    elevation: "200 - 350 m",
    climate: "Polar desert, permafrost tundra",
    tempRange: "-45°C to +10°C",
    category: "Impact Crater & Polar",
    targetMatchId: "moon-shackleton",
    targetMatchName: "Shackleton Crater Rim (Moon) & Jezero Crater (Mars)",
    scores: {
      overall: 93,
      topography: 96,
      mineralogy: 91,
      environment: 93,
      regolith: 92,
      missionUtility: 95
    },
    keyAnalogs: [
      "23 km diameter meteorite impact structure preserved in cold desert conditions",
      "Polymict impact breccia hills and shatter cone shock metamorphism resembling lunar highlands",
      "Fluvial periglacial gullies cut into impact deposits, mirroring Martian crater wall gullies",
      "Home of the NASA Haughton-Mars Project (HMP) continuous field research program"
    ],
    missionApplications: [
      "Artemis crew extravehicular activity (EVA) navigation and boulder sampling",
      "Pressurized rover field trials and communication delay simulations",
      "Testing impact melt rock identification algorithms with hyperspectral cameras"
    ],
    nasaDatasets: [
      "LRO LOLA Elevation Models (compared with ArcticDEM 2m)",
      "NASA Earthdata SRTM / ASTER GDEM",
      "MRO HiRISE Gullies vs Devon Island Permafrost Runoff",
      "NASA Arctic-Boreal Vulnerability Experiment (ABoVE)"
    ],
    fieldLogistics: {
      accessibility: "Difficult (Twin Otter flights from Resolute Bay onto dirt strip)",
      isolationLevel: "Extreme (Uninhabited island, Arctic polar bears present)",
      activeFacilities: "HMP Research Station (HMP RS), Mars Institute base camp"
    },
    description: "Haughton Crater on Devon Island is an internationally renowned planetary analogue. Formed by a massive hyper-velocity bolide impact ~39 million years ago into carbonate and sandstone strata, its polar desert setting has preserved pristine impact structures, ejecta blankets, and hydrothermally altered impact breccias analogous to lunar and Martian crater sites."
  },
  {
    id: "analog-lanzarote",
    name: "Lanzarote & Cueva de los Verdes Volcanic Tubes",
    region: "Canary Islands, Spain",
    coordinates: "29.15° N, 13.44° W",
    lat: 29.15,
    lng: -13.44,
    elevation: "150 - 600 m",
    climate: "Arid subtropical volcanic",
    tempRange: "+12°C to +30°C",
    category: "Lava Tubes & Caves",
    targetMatchId: "moon-marius",
    targetMatchName: "Marius Hills Pit & Subsurface Lunar Bases",
    scores: {
      overall: 92,
      topography: 91,
      mineralogy: 93,
      environment: 86,
      regolith: 90,
      missionUtility: 98
    },
    keyAnalogs: [
      "Corona volcanic tube system stretching 7.6 km, including sub-sea lava galleries",
      "Catenas of collapsed skylights ('Jameos') structurally identical to lunar and Martian pit chains",
      "Secondary sulfate and carbonate cave speleothems mirroring potential Martian cave deposits",
      "Primary training location for ESA PANGAEA astronaut planetary geology and cave courses"
    ],
    missionApplications: [
      "Autonomous 3D LiDAR mapping of underground lava tube geometries",
      "Radiation shielding verification and subterranean habitat pressurization concepts",
      "Micro-rover rappelling and robotic cliff descent into lunar skylights"
    ],
    nasaDatasets: [
      "ESA PANGAEA Planetary Geological Dataset",
      "LRO LROC NAC 3D Pit Topography Models",
      "GRAIL Lunar Subsurface Density Anomaly Maps",
      "NASA Earthdata Sentinel-2 High-Resolution Basalt Cartography"
    ],
    fieldLogistics: {
      accessibility: "High (Commercial flights to Lanzarote, paved road access)",
      isolationLevel: "Moderate (Protected UNESCO Geopark)",
      activeFacilities: "ESA PANGAEA field training center, Cabildo de Lanzarote research labs"
    },
    description: "Lanzarote features one of the most magnificent lava tube complexes on Earth, formed by the Monte Corona volcano. Its enormous subterranean galleries, skylights, and basaltic compositions offer the definitive test bed for exploring lunar lava tubes (such as Marius Hills) that will host future permanent human bases protected from cosmic rays."
  },
  {
    id: "analog-maunaloa",
    name: "Mauna Loa & Ka'u Desert Basalts (HI-SEAS)",
    region: "Hawaii Island, Hawaii, USA",
    coordinates: "19.53° N, 155.57° W",
    lat: 19.53,
    lng: -155.57,
    elevation: "2,500 - 3,400 m",
    climate: "High-altitude arid volcanic",
    tempRange: "-5°C to +20°C",
    category: "Volcanic & Basaltic",
    targetMatchId: "moon-marius",
    targetMatchName: "Lunar Mare Procellarum & Mars Tharsis Volcanoes",
    scores: {
      overall: 91,
      topography: 90,
      mineralogy: 95,
      environment: 87,
      regolith: 92,
      missionUtility: 96
    },
    keyAnalogs: [
      "Pahoehoe and Aa basaltic flows with fresh un-weathered glassy crusts",
      "Abrasive volcanic cinder, tephra dunes, and volcanic degassed sulfur vents",
      "High altitude atmospheric thinning with elevated solar radiation exposure",
      "Home of the HI-SEAS habitat (Hawaii Space Exploration Analog and Simulation)"
    ],
    missionApplications: [
      "Long-duration crew confinement and simulated planetary EVA missions",
      "Testing space suit fabric abrasion against sharp basaltic glass fragments",
      "Solar array efficiency and power management in remote volcanic isolation"
    ],
    nasaDatasets: [
      "NASA AVIRIS (Airborne Visible/Infrared Imaging Spectrometer)",
      "USGS 3DEP High-Resolution LiDAR Bare Earth DEM",
      "LRO Diviner Thermal Roughness Calibration",
      "MRO CRISM Basalt Spectral Library"
    ],
    fieldLogistics: {
      accessibility: "High (4x4 drive from Saddle Road / Hilo)",
      isolationLevel: "High (High-altitude volcanic saddle)",
      activeFacilities: "HI-SEAS geodesic habitat, PISCES lunar robotics test site"
    },
    description: "Located on the barren slopes of Mauna Loa at 8,200 feet, the HI-SEAS site and the surrounding Ka'u Desert basalt fields feature razor-sharp young lava flows and volcanic ash devoid of plant life. NASA has funded multiple long-duration simulated Mars and Moon missions here to test crew psychology, communications latency, and field science protocols."
  },
  {
    id: "analog-danakil",
    name: "Danakil Depression & Dallol Hydrothermal Complex",
    region: "Afar Triangle, Northern Ethiopia",
    coordinates: "14.24° N, 40.30° E",
    lat: 14.24,
    lng: 40.30,
    elevation: "-125 m (below sea level)",
    tempRange: "+28°C to +52°C (hottest year-round place on Earth)",
    climate: "Hyper-arid, hyper-saline hydrothermal basin",
    category: "Hydrothermal & Saline",
    targetMatchId: "mars-jezero",
    targetMatchName: "Early Mars Hydrothermal & Jezero Crater Springs",
    scores: {
      overall: 89,
      topography: 85,
      mineralogy: 96,
      environment: 95,
      regolith: 86,
      missionUtility: 90
    },
    keyAnalogs: [
      "Extreme multi-stress environment: hypersaline, hyperacidic (pH < 0), high temp",
      "Precipitating iron-rich sulfate, halite, and elemental sulfur chimney structures",
      "Primitive polyextremophile microbial ecosystems in hydrothermal brine pools",
      "Physical analog for ancient Martian volcanic hydrothermal vents and paleolakes"
    ],
    missionApplications: [
      "Testing Raman and fluorescence spectrometers for bio-signature detection in acidic brines",
      "Corrosion testing of rover chassis and sampling drills against aggressive acid-sulfate salts",
      "Understanding geochemical pathways of early Martian prebiotic chemistry"
    ],
    nasaDatasets: [
      "Terra MODIS Land Surface Temperature Datasets",
      "NASA Earthdata Landsat 9 OLI Short-Wave Infrared (SWIR)",
      "MRO CRISM Polyhydrated Sulfate Spectral Standards",
      "Mars Express OMEGA Hydrated Mineral Maps"
    ],
    fieldLogistics: {
      accessibility: "Very Difficult (Armed security escorts, extreme thermal heat, no infrastructure)",
      isolationLevel: "Extreme (Tectonic depression in remote rift valley)",
      activeFacilities: "Europlanet research field campaigns"
    },
    description: "Dallol in the Danakil Depression is one of the most hostile environments on our planet. With boiling geothermal springs discharging saturated hydrochloric acid and iron salts onto a neon landscape of salt terraces, it mirrors the high-temperature, acid-sulfate hydrothermal systems that operated on early Mars during the Noachian and Hesperian epochs."
  },
  {
    id: "analog-wadirum",
    name: "Wadi Rum & Southern Jordan Sandstone Desert",
    region: "Aqaba Governorate, Jordan",
    coordinates: "29.57° N, 35.42° E",
    lat: 29.57,
    lng: 35.42,
    elevation: "900 - 1,750 m",
    climate: "Hyper-arid desert plateau",
    tempRange: "-4°C to +42°C",
    category: "Arid Eolian & Regolith",
    targetMatchId: "mars-gale",
    targetMatchName: "Mars Gale Crater Dunes & Valles Marineris",
    scores: {
      overall: 91,
      topography: 95,
      mineralogy: 90,
      environment: 91,
      regolith: 94,
      missionUtility: 92
    },
    keyAnalogs: [
      "Iron-oxide coated hematitic quartz sand dunes mirroring Martian red regolith color and friction",
      "Monumental sandstone inselbergs and wind-sculpted yardangs analogous to Gale Crater",
      "Severe eolian dust storms and fine particulate lofting similar to Martian atmospheric dust",
      "World-renowned filming location for Martian surface missions ('The Martian', 'Dune')"
    ],
    missionApplications: [
      "Testing rover wheel grousers against low-cohesion loose red sand slopes",
      "Optical navigation and hazard avoidance under airborne dust visibility degradation",
      "Testing solar array dust repulsion via electrostatic electrodynamic dust shields"
    ],
    nasaDatasets: [
      "NASA SRTM Digital Elevation Models 30m",
      "Mars MRO HiRISE Color Imagery of Active Sand Dunes",
      "Curiosity Mastcam & ChemCam Color Calibration Target Data",
      "NASA Earthdata Sentinel-2 True & False Color Composites"
    ],
    fieldLogistics: {
      accessibility: "High (Paved road from Aqaba, established eco-camps)",
      isolationLevel: "Moderate (Bedouin cultural preserves)",
      activeFacilities: "Jordanian aerospace robotics testing events, Mars-style glamping stations"
    },
    description: "Wadi Rum's towering red sandstone monoliths and undulating crimson sand dunes are enriched with iron oxides that closely match the reflectance spectrum and mechanical shear angle of Martian dune fields observed by Curiosity and Perseverance in Gale and Jezero Craters."
  },
  {
    id: "analog-kilbourne",
    name: "Kilbourne Hole Maar Crater",
    region: "Potrillo Volcanic Field, New Mexico, USA",
    coordinates: "31.97° N, 106.96° W",
    lat: 31.97,
    lng: -106.96,
    elevation: "1,260 m",
    climate: "Arid desert grassland (Chihuahuan Desert)",
    tempRange: "-10°C to +40°C",
    category: "Maar Explosion Crater",
    targetMatchId: "moon-malapert",
    targetMatchName: "Artemis South Pole Crater Rims & Ejecta Blankets",
    scores: {
      overall: 93,
      topography: 94,
      mineralogy: 92,
      environment: 89,
      regolith: 93,
      missionUtility: 98
    },
    keyAnalogs: [
      "Deep explosion crater (Maar) with steep walls exposing layered ejecta rim stratigraphy",
      "Abundant mantle xenoliths (spinel lherzolite) and volcanic bombs mimicking impact ejecta",
      "Direct Artemis astronaut field geology training site (Artemis II, III astronaut classes)",
      "Testing handheld lunar science tools (xRF, multispectral cameras, sample corers)"
    ],
    missionApplications: [
      "Astronaut traverse navigation on steep 25-35° crater inner slopes",
      "Handheld X-ray Fluorescence (xRF) and LIBS tool operation in pressurized space suits",
      "Ejecta stratigraphy reading and selective scientific sample collection"
    ],
    nasaDatasets: [
      "USGS 3DEP High-Resolution Aerial Lidar (0.5m)",
      "NASA Apollo & Artemis Geologic Training Field Catalogs",
      "LRO LOLA Slope and Roughness Maps",
      "Landsat 8/9 Thermal and Spectral Bands"
    ],
    fieldLogistics: {
      accessibility: "High (45 min drive from El Paso / Las Cruces via dirt roads)",
      isolationLevel: "Moderate (BLM Public Lands)",
      activeFacilities: "NASA Johnson Space Center (JSC) field training camps"
    },
    description: "Kilbourne Hole is a phreatomagmatic volcanic maar crater formed ~80,000 years ago when ascending magma encountered shallow groundwater. Its layered crater walls, explosion ejecta, and mantle xenoliths have served as a premier NASA astronaut geology training site since the Apollo era, continuing today for Artemis lunar explorers."
  },
  {
    id: "analog-cratersmoon",
    name: "Craters of the Moon National Monument",
    region: "Snake River Plain, Idaho, USA",
    coordinates: "43.46° N, 113.56° W",
    lat: 43.46,
    lng: -113.56,
    elevation: "1,800 m",
    climate: "Semi-arid sagebrush steppe / volcanic plain",
    tempRange: "-20°C to +35°C",
    category: "Volcanic & Basaltic",
    targetMatchId: "moon-marius",
    targetMatchName: "Oceanus Procellarum & Elysium Planitia (Mars)",
    scores: {
      overall: 90,
      topography: 91,
      mineralogy: 94,
      environment: 85,
      regolith: 91,
      missionUtility: 92
    },
    keyAnalogs: [
      "Extensive poly-phase basaltic flood lava plain covering 1,600 km² along the Great Rift",
      "Vast fields of intact cinder cones, spatter ramparts, and open lava tube cave networks",
      "Basaltic cinder dunes testing robotic wheel sinkage and motor torque limits",
      "Training site for Apollo 14 astronauts (Alan Shepard, Edgar Mitchell)"
    ],
    missionApplications: [
      "Testing autonomous rover traverse over chaotic blocky aa lava fields",
      "Subsurface micro-climatic logging inside collapsed lava tubes",
      "Validating orbital multispectral basalt signatures with ground-truth sensors"
    ],
    nasaDatasets: [
      "NASA Earthdata SRTM & ASTER Imagery",
      "USGS National Elevation Dataset (NED)",
      "LRO LROC Wide Angle Camera Basalt Reflectance Library",
      "Mars Odyssey THEMIS Thermal Inertia Datasets"
    ],
    fieldLogistics: {
      accessibility: "High (US Highway 20/26 runs directly through park)",
      isolationLevel: "Moderate (National Park Service visitor center nearby)",
      activeFacilities: "NASA FINESSE / SUBMARS scientific field campaigns"
    },
    description: "Preserving some of the youngest and deepest basaltic lava flows in the contiguous United States, Craters of the Moon spans 60 distinct lava flows. The stark, barren cinder cones and vast lava tubes simulate the volcanic plains of Lunar Mare and Martian volcanic lowlands."
  },
  {
    id: "analog-brimstone",
    name: "Brimstone Basin & Norris Geyser Basin (Yellowstone)",
    region: "Yellowstone National Park, Wyoming, USA",
    coordinates: "44.55° N, 110.35° W",
    lat: 44.55,
    lng: -110.35,
    elevation: "2,350 m",
    climate: "Sub-alpine geothermal basin",
    tempRange: "-30°C to +30°C",
    category: "Hydrothermal Silica",
    targetMatchId: "mars-jezero",
    targetMatchName: "Mars Jezero Crater Silica & Gusev Crater Home Plate",
    scores: {
      overall: 91,
      topography: 84,
      mineralogy: 97,
      environment: 92,
      regolith: 88,
      missionUtility: 94
    },
    keyAnalogs: [
      "Extensive hydrothermal opal-A silica sinter terraces and acid-sulfate leaching",
      "Preserved micro-stromatolites and biosignatures in boiling geothermal outflows",
      "Direct geological match to hydrated silica deposits discovered by Spirit at Gusev Crater",
      "Test site for Raman and fluorescence spectrometers intended for Mars exploration"
    ],
    missionApplications: [
      "Testing laser-induced breakdown spectroscopy (LIBS) on silica sinter crusts",
      "Validating biosignature preservation metrics in hydrothermal minerals",
      "Evaluating drill bit thermal management during sampling of warm reactive ground"
    ],
    nasaDatasets: [
      "NASA AVIRIS Hyperspectral Airborne Scans of Yellowstone",
      "Mars Spirit Rover Mini-TES & Pancam Datasets",
      "MRO CRISM Hydrated Silica Spectral Signatures",
      "Landsat 8/9 Thermal Infrared Sensors"
    ],
    fieldLogistics: {
      accessibility: "Moderate (Backcountry trail permits required)",
      isolationLevel: "High (Thermal hazard zones, active wildlife)",
      activeFacilities: "Yellowstone Volcano Observatory (USGS/NASA)"
    },
    description: "Brimstone Basin is a non-thermal, acid-leached fossil hydrothermal system east of Yellowstone Lake, while Norris Basin contains the hottest, most acidic active geysers on Earth. Their rich deposits of amorphous silica (opal-A) and iron-sulfate minerals are the direct terrestrial analog to the silica deposits found on Mars that may preserve ancient extraterrestrial microbial life."
  },
  {
    id: "analog-svalbard",
    name: "Svalbard Spitsbergen (AMASE Expedition Sites)",
    region: "Svalbard Archipelago, High Arctic, Norway",
    coordinates: "79.15° N, 14.50° E",
    lat: 79.15,
    lng: 14.50,
    elevation: "300 - 900 m",
    climate: "High Arctic glacio-volcanic permafrost",
    tempRange: "-35°C to +8°C",
    category: "Polar Glacio-Volcanic",
    targetMatchId: "mars-utopia",
    targetMatchName: "Mars Polar Ice Caps & Subglacial Basalts",
    scores: {
      overall: 92,
      topography: 89,
      mineralogy: 94,
      environment: 96,
      regolith: 89,
      missionUtility: 95
    },
    keyAnalogs: [
      "Subglacial volcanic centers (Sverrefjell volcano) producing basalt-ice interactions",
      "Mantle xenoliths hosting carbonate globules identical to those in Martian meteorite ALH84001",
      "Glacier ice cores and cryogenic permafrost containing active extremophile psychrophiles",
      "Host of the Arctic Mars Analog Svalbard Expedition (AMASE) tests for NASA/ESA"
    ],
    missionApplications: [
      "Instrument calibration for Curiosity's CheMin and Perseverance's SHERLOC in arctic conditions",
      "Autonomous rover testing on snow, permafrost moraines, and polished glacial bedrock",
      "Field validation of life-detection protocols under strict planetary protection clean standards"
    ],
    nasaDatasets: [
      "ESA CryoSat-2 High-Resolution Ice Surface Radar",
      "NASA Earthdata MODIS Snow and Ice Cover Products",
      "MRO SHARAD Polar Ice Cap Sounding Comparison",
      "ALH84001 Martian Meteorite Petrographic Thin Sections"
    ],
    fieldLogistics: {
      accessibility: "Challenging (Research vessels from Longyearbyen / helicopter)",
      isolationLevel: "Extreme (80 degrees North, active polar bear habitat)",
      activeFacilities: "Ny-Ålesund Research Station, AMASE expedition base"
    },
    description: "Located well within the Arctic Circle at 79° North, Svalbard is a glacio-volcanic paradise where mantle xenoliths, basaltic volcanoes, and permanent ice converge. It has been used for over 15 years by NASA and ESA to test rovers and life-detection suites intended for Mars polar and subsurface ice missions."
  }
];

// Open NASA Resources Directory
const NASA_OPEN_RESOURCES = [
  {
    name: "NASA Planetary Data System (PDS)",
    url: "https://pds.nasa.gov/",
    domain: "Planetary Science",
    description: "The primary archive for digital data returned by NASA planetary missions, including raw and calibrated topography, spectrometer data, and orbital imagery."
  },
  {
    name: "LRO LOLA (Lunar Orbiter Laser Altimeter)",
    url: "https://pds-geosciences.wustl.edu/missions/lro/lola.htm",
    domain: "Lunar Topography",
    description: "Global high-resolution topographic models and slope/roughness maps of the Moon, essential for Artemis South Pole landing site slope analysis."
  },
  {
    name: "LRO Diviner Lunar Radiometer Experiment",
    url: "https://diviner.ucla.edu/",
    domain: "Lunar Thermal Physics",
    description: "Continuous day/night thermal mapping of the Moon, measuring extreme temperature swings in illuminated rims down to ultra-cold PSR cold traps (<40K)."
  },
  {
    name: "MRO CRISM (Compact Reconnaissance Imaging Spectrometer for Mars)",
    url: "https://crism.jhuapl.edu/",
    domain: "Martian Mineralogy",
    description: "Visible and infrared hyperspectral cubes identifying hydrated clays, carbonates, sulfates, and iron oxides on the Martian surface."
  },
  {
    name: "MRO HiRISE (High Resolution Imaging Science Experiment)",
    url: "https://hirise.lpl.arizona.edu/",
    domain: "Martian High-Res Imagery",
    description: "Sub-meter resolution imaging (up to 25 cm/pixel) of Martian dunes, crater scarps, boulder fields, and rover traverse terrain."
  },
  {
    name: "NASA Earthdata & GIBS (Global Imagery Browse Services)",
    url: "https://www.earthdata.nasa.gov/",
    domain: "Earth Observation",
    description: "Full open access to EOSDIS satellite data including MODIS Land Surface Temp, ASTER Global DEM, Landsat 8/9 OLI, and ECOSTRESS."
  },
  {
    name: "NASA EMIT (Earth Surface Mineral Dust Source Investigation)",
    url: "https://earth.jpl.nasa.gov/emit/",
    domain: "Hyperspectral Mineralogy",
    description: "High-resolution imaging spectrometer on the International Space Station mapping surface mineralogy of Earth's arid regions in 285 spectral bands."
  },
  {
    name: "USGS Astrogeology Science Center",
    url: "https://astrogeology.usgs.gov/",
    domain: "Planetary Cartography",
    description: "Planetary GIS maps, unified lunar geologic maps, Mars geologic quadrangles, and Artemis landing zone candidate evaluations."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANETARY_TARGETS, EARTH_ANALOGS, NASA_OPEN_RESOURCES };
}
