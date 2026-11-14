import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_presentation():
    prs = Presentation()
    # 16:9 Widescreen dimensions
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    # Aerospace Color Palette
    COLOR_BG = RGBColor(7, 9, 14)          # #07090E Deep Space Obsidian
    COLOR_CARD = RGBColor(14, 19, 29)      # #0E131D Dark Surface
    COLOR_BORDER = RGBColor(30, 41, 59)    # #1E293B Border
    COLOR_WHITE = RGBColor(255, 255, 255)
    COLOR_MUTED = RGBColor(148, 163, 184)  # #94A3B8 Silver Muted
    COLOR_CYAN = RGBColor(0, 229, 255)     # #00E5FF Lunar Cyan
    COLOR_MARS = RGBColor(255, 87, 34)     # #FF5722 Mars Rust
    COLOR_EMERALD = RGBColor(0, 230, 118)  # #00E676 High Fidelity Green

    def set_slide_background(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
        bg.fill.solid()
        bg.fill.fore_color.rgb = COLOR_BG
        bg.line.fill.background()
        return bg

    def add_header(slide, title_text, category_text="NASA SPACE APPS CHALLENGE 2026"):
        # Top Badge / Category
        cat_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.7), Inches(0.4))
        tf_cat = cat_box.text_frame
        tf_cat.word_wrap = True
        p_cat = tf_cat.paragraphs[0]
        p_cat.text = category_text.upper()
        p_cat.font.name = "Arial"
        p_cat.font.size = Pt(10)
        p_cat.font.bold = True
        p_cat.font.color.rgb = COLOR_CYAN

        # Title
        t_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.7), Inches(11.7), Inches(0.8))
        tf = t_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title_text
        p.font.name = "Arial"
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = COLOR_WHITE

        # Divider line
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.5), Inches(11.733), Inches(0.02))
        line.fill.solid()
        line.fill.fore_color.rgb = COLOR_BORDER
        line.line.fill.background()

    def add_card(slide, left, top, width, height, border_color=COLOR_BORDER):
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        card.fill.solid()
        card.fill.fore_color.rgb = COLOR_CARD
        card.line.color.rgb = border_color
        card.line.width = Pt(1.2)
        return card

    # =========================================================================
    # SLIDE 1: Title Slide
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    set_slide_background(s1)

    # Decorative accent line top
    accent_bar = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), prs.slide_width, Inches(0.08))
    accent_bar.fill.solid()
    accent_bar.fill.fore_color.rgb = COLOR_CYAN
    accent_bar.line.fill.background()

    # Category Tag
    tag_box = s1.shapes.add_textbox(Inches(1.0), Inches(1.4), Inches(11.3), Inches(0.5))
    p_tag = tag_box.text_frame.paragraphs[0]
    p_tag.text = "NASA SPACE APPS CHALLENGE 2026  •  TEAM ARCHIMEDES"
    p_tag.font.name = "Arial"
    p_tag.font.size = Pt(12)
    p_tag.font.bold = True
    p_tag.font.color.rgb = COLOR_CYAN

    # Main Big Title
    title_box = s1.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(11.3), Inches(1.5))
    p_title = title_box.text_frame.paragraphs[0]
    p_title.text = "TERRA-LUNA"
    p_title.font.name = "Arial"
    p_title.font.size = Pt(54)
    p_title.font.bold = True
    p_title.font.color.rgb = COLOR_WHITE

    # Subtitle
    sub_box = s1.shapes.add_textbox(Inches(1.0), Inches(3.2), Inches(11.3), Inches(0.8))
    p_sub = sub_box.text_frame.paragraphs[0]
    p_sub.text = "Planetary Surface Analog Discovery & Characterization Engine"
    p_sub.font.name = "Arial"
    p_sub.font.size = Pt(22)
    p_sub.font.color.rgb = COLOR_EMERALD

    # Challenge Banner Box
    add_card(s1, Inches(1.0), Inches(4.2), Inches(11.333), Inches(1.8), COLOR_CYAN)
    chal_box = s1.shapes.add_textbox(Inches(1.3), Inches(4.35), Inches(10.7), Inches(1.5))
    tf_chal = chal_box.text_frame
    tf_chal.word_wrap = True
    p1 = tf_chal.paragraphs[0]
    p1.text = "THE CHALLENGE:"
    p1.font.bold = True
    p1.font.size = Pt(11)
    p1.font.color.rgb = COLOR_CYAN

    p2 = tf_chal.add_paragraph()
    p2.text = "Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars using open data from NASA and space agencies to characterize new terrestrial analogs for future bases and landing sites."
    p2.font.size = Pt(14)
    p2.font.color.rgb = COLOR_WHITE
    p2.space_before = Pt(6)

    # Footer Links
    foot_box = s1.shapes.add_textbox(Inches(1.0), Inches(6.5), Inches(11.3), Inches(0.5))
    p_foot = foot_box.text_frame.paragraphs[0]
    p_foot.text = "Live Repository: https://github.com/Mmmaihdnsc/luna   •   Live App: https://mmmaihdnsc.github.io/luna/"
    p_foot.font.size = Pt(11)
    p_foot.font.color.rgb = COLOR_MUTED

    # =========================================================================
    # SLIDE 2: The Challenge & The Problem
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    set_slide_background(s2)
    add_header(s2, "The Problem: Why Terrestrial Analogs are Crucial Yet Under-Characterized")

    card_w = Inches(3.64)
    card_h = Inches(5.1)
    card_y = Inches(1.8)

    # Column 1
    add_card(s2, Inches(0.8), card_y, card_w, card_h, COLOR_MARS)
    tb1 = s2.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(3.24), Inches(4.7))
    tf1 = tb1.text_frame
    tf1.word_wrap = True
    p = tf1.paragraphs[0]
    p.text = "01. HIGH MISSION STAKES"
    p.font.bold = True
    p.font.size = Pt(14)
    p.font.color.rgb = COLOR_MARS

    bullets1 = [
        "Artemis III/IV and Mars missions require landing on extreme terrains (polar crater rims, lava tubes, buried ice sheets).",
        "Hardware failures on the Moon or Mars are catastrophic and irreversible.",
        "Rovers, spacesuit seals, and cryogenic drills must be verified on analogous Earth terrain prior to launch."
    ]
    for b in bullets1:
        pb = tf1.add_paragraph()
        pb.text = "• " + b
        pb.font.size = Pt(12)
        pb.font.color.rgb = COLOR_WHITE
        pb.space_before = Pt(12)

    # Column 2
    add_card(s2, Inches(4.84), card_y, card_w, card_h, COLOR_CYAN)
    tb2 = s2.shapes.add_textbox(Inches(5.04), Inches(2.0), Inches(3.24), Inches(4.7))
    tf2 = tb2.text_frame
    tf2.word_wrap = True
    p = tf2.paragraphs[0]
    p.text = "02. FRAGMENTED ANALOG DATA"
    p.font.bold = True
    p.font.size = Pt(14)
    p.font.color.rgb = COLOR_CYAN

    bullets2 = [
        "Historical analog site selection was largely qualitative and based on visual resemblance ('it looks like Mars').",
        "Terrestrial datasets (SRTM, ASTER, Landsat) were isolated from planetary orbital archives (LOLA, CRISM).",
        "No standardized quantitative metric existed to evaluate multi-sensor analog fidelity across missions."
    ]
    for b in bullets2:
        pb = tf2.add_paragraph()
        pb.text = "• " + b
        pb.font.size = Pt(12)
        pb.font.color.rgb = COLOR_WHITE
        pb.space_before = Pt(12)

    # Column 3
    add_card(s2, Inches(8.88), card_y, card_w, card_h, COLOR_EMERALD)
    tb3 = s2.shapes.add_textbox(Inches(9.08), Inches(2.0), Inches(3.24), Inches(4.7))
    tf3 = tb3.text_frame
    tf3.word_wrap = True
    p = tf3.paragraphs[0]
    p.text = "03. OPERATIONAL BLIND SPOTS"
    p.font.bold = True
    p.font.size = Pt(14)
    p.font.color.rgb = COLOR_EMERALD

    bullets3 = [
        "Critical environmental variables—subsurface permafrost stability, abrasive glass-rich tephra friction, and radiation shielding in caves—are under-characterized.",
        "Newly emerging sites (Icelandic basalt fields, Canary lava tubes, Maar explosion craters) lack unified catalogs."
    ]
    for b in bullets3:
        pb = tf3.add_paragraph()
        pb.text = "• " + b
        pb.font.size = Pt(12)
        pb.font.color.rgb = COLOR_WHITE
        pb.space_before = Pt(12)

    # =========================================================================
    # SLIDE 3: The Solution: TERRA-LUNA
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    set_slide_background(s3)
    add_header(s3, "The Solution: A Quantitative Planetary Geospatial Intelligence Platform")

    # Banner across top
    add_card(s3, Inches(0.8), Inches(1.8), Inches(11.733), Inches(1.2), COLOR_CYAN)
    top_tb = s3.shapes.add_textbox(Inches(1.0), Inches(1.9), Inches(11.3), Inches(1.0))
    tf_top = top_tb.text_frame
    tf_top.word_wrap = True
    p_sol = tf_top.paragraphs[0]
    p_sol.text = "TERRA-LUNA unifies open orbital Earth, Moon, and Mars data into a single interactive intelligence platform, replacing qualitative guesswork with mathematically verifiable 5-axis similarity scoring."
    p_sol.font.size = Pt(14)
    p_sol.font.color.rgb = COLOR_WHITE

    # 3 core pillars below
    p_w = Inches(3.64)
    p_h = Inches(3.7)
    p_y = Inches(3.2)

    pillars = [
        ("GLOBAL ANALOG CATALOG", COLOR_CYAN, [
            "12 rigorously characterized sites spanning volcanic lava tubes, polar deserts, hyper-arid salt flats, and impact craters.",
            "Direct mappings to Artemis South Pole (Shackleton, Marius Hills) and Mars (Jezero, Utopia Planitia)."
        ]),
        ("MULTI-SENSOR HARMONIZATION", COLOR_MARS, [
            "Synthesizes NASA LOLA, Diviner, MRO CRISM/HiRISE with Earthdata ASTER, MODIS, and EMIT hyperspectral sensors.",
            "Cross-references digital elevation models (DEM) with surface mineral absorption bands."
        ]),
        ("MISSION-READY DECISION TOOLS", COLOR_EMERALD, [
            "Interactive dark-mode telemetry map with geodesic 'Analog Bridge' connection arcs.",
            "Side-by-side Dual Telemetry comparison matrix and real-time Topographic Transect Simulator.",
            "One-click exportable field mission briefing dossiers."
        ])
    ]

    for idx, (p_title, p_col, p_items) in enumerate(pillars):
        x = Inches(0.8 + idx * 4.04)
        add_card(s3, x, p_y, p_w, p_h, p_col)
        tb = s3.shapes.add_textbox(x + Inches(0.2), p_y + Inches(0.2), p_w - Inches(0.4), p_h - Inches(0.4))
        tf = tb.text_frame
        tf.word_wrap = True
        pt = tf.paragraphs[0]
        pt.text = p_title
        pt.font.bold = True
        pt.font.size = Pt(13)
        pt.font.color.rgb = p_col

        for item in p_items:
            pi = tf.add_paragraph()
            pi.text = "• " + item
            pi.font.size = Pt(11)
            pi.font.color.rgb = COLOR_WHITE
            pi.space_before = Pt(8)

    # =========================================================================
    # SLIDE 4: Scientific Methodology: 5-Axis Similarity Index
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4)
    add_header(s4, "Scientific Methodology: The 5-Axis Planetary Similarity Index")

    # Formula Card Left
    add_card(s4, Inches(0.8), Inches(1.8), Inches(4.5), Inches(5.1), COLOR_CYAN)
    f_tb = s4.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(4.1), Inches(4.7))
    tf_f = f_tb.text_frame
    tf_f.word_wrap = True
    pf = tf_f.paragraphs[0]
    pf.text = "THE QUANTITATIVE EQUATION"
    pf.font.bold = True
    pf.font.size = Pt(13)
    pf.font.color.rgb = COLOR_CYAN

    pf2 = tf_f.add_paragraph()
    pf2.text = "Score = w1*S_topo + w2*S_min + w3*S_env + w4*S_reg + w5*S_util"
    pf2.font.bold = True
    pf2.font.size = Pt(12)
    pf2.font.color.rgb = COLOR_EMERALD
    pf2.space_before = Pt(12)

    pf3 = tf_f.add_paragraph()
    pf3.text = "Each terrestrial analog is evaluated against its extraterrestrial counterpart across normalized 0-100% fidelity sub-indices derived directly from orbital telemetry and ground-truth physics."
    pf3.font.size = Pt(11)
    pf3.font.color.rgb = COLOR_MUTED
    pf3.space_before = Pt(12)

    pf4 = tf_f.add_paragraph()
    pf4.text = "BENCHMARK RESULTS:"
    pf4.font.bold = True
    pf4.font.size = Pt(12)
    pf4.font.color.rgb = COLOR_WHITE
    pf4.space_before = Pt(16)

    scores_list = [
        "McMurdo Dry Valleys vs Utopia Planitia: 96%",
        "Atacama Yungay Core vs Jezero Crater: 95%",
        "Askja Caldera vs Marius Hills Pit: 94%",
        "Kilbourne Hole Maar vs Artemis Rim: 93%",
        "Haughton Crater vs Shackleton Rim: 93%",
        "Lanzarote Lava Tubes vs Lunar Tubes: 92%"
    ]
    for sc in scores_list:
        psc = tf_f.add_paragraph()
        psc.text = "✔ " + sc
        psc.font.size = Pt(10)
        psc.font.color.rgb = COLOR_WHITE
        psc.space_before = Pt(4)

    # 5 Axes Explanations Right
    add_card(s4, Inches(5.6), Inches(1.8), Inches(6.933), Inches(5.1), COLOR_BORDER)
    ax_tb = s4.shapes.add_textbox(Inches(5.8), Inches(2.0), Inches(6.5), Inches(4.7))
    tf_ax = ax_tb.text_frame
    tf_ax.word_wrap = True
    p_ax = tf_ax.paragraphs[0]
    p_ax.text = "THE 5 CORE SIMILARITY AXES"
    p_ax.font.bold = True
    p_ax.font.size = Pt(13)
    p_ax.font.color.rgb = COLOR_WHITE

    axes_desc = [
        ("1. Topography & Slope (S_topo)", COLOR_CYAN, "Variance in elevation, RMS roughness, and traversability slope profiles derived from LOLA/MOLA and ASTER GDEM."),
        ("2. Mineralogy Fidelity (S_min)", COLOR_EMERALD, "Hyperspectral absorption band matching for tholeiitic basalts, smectite clays, jarosite sulfates, and opal-A silica (CRISM vs Landsat/EMIT)."),
        ("3. Environmental Extremes (S_env)", COLOR_MARS, "Diurnal surface temperature swings (-246°C to +50°C), aridity indices (<1mm/yr rain), and solar UV flux (Diviner vs MODIS)."),
        ("4. Regolith Mechanics (S_reg)", COLOR_MUTED, "Grain size distribution, shear strength, cohesion, and wheel sinkage friction angles for rover locomotion."),
        ("5. Mission Utility (S_util)", COLOR_CYAN, "Suitability for testing spacesuit EVA joints, autonomous SLAM navigation, cryogenic ISRU ice coring, and subterranean habitat pressurization.")
    ]
    for title, col, desc in axes_desc:
        pt = tf_ax.add_paragraph()
        pt.text = title
        pt.font.bold = True
        pt.font.size = Pt(11)
        pt.font.color.rgb = col
        pt.space_before = Pt(8)

        pd = tf_ax.add_paragraph()
        pd.text = desc
        pd.font.size = Pt(10)
        pd.font.color.rgb = COLOR_WHITE

    # =========================================================================
    # SLIDE 5: Interactive Dashboard & Features
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5)
    add_header(s5, "Interactive Platform Capabilities & Architecture")

    grid = [
        ("GEOSPATIAL ANALOG MAP", COLOR_CYAN, Inches(0.8), Inches(1.8), [
            "Dark NASA mission control tile styling with satellite toggle.",
            "Color-coded glowing status markers (Moon = Cyan, Mars = Rust).",
            "Dynamic 'Analog Bridges' rendering visual geodesic connection arcs from Earth to planetary bodies.",
            "Live filtering by terrain category and mission objective."
        ]),
        ("SIDE-BY-SIDE DUAL TELEMETRY", COLOR_EMERALD, Inches(6.8), Inches(1.8), [
            "Select ANY Earth analog and compare against ANY Lunar or Martian base candidate.",
            "Dynamic multi-axis radar chart rendering live parameter envelopes.",
            "Head-to-head delta tables: elevation, climate, temperature range, dominant geology, and primary challenges."
        ]),
        ("TOPOGRAPHIC TRANSECT SIMULATOR", COLOR_MARS, Inches(0.8), Inches(4.5), [
            "Interactive HTML5 Canvas cross-section engine.",
            "Compares digital elevation profiles: Haughton Crater vs Shackleton Rim, Lanzarote vs Marius Hills Tube.",
            "Calculates slope gradients (<30° rover threshold), RMS roughness, and obstacle boulder densities."
        ]),
        ("MISSION BRIEFING DOSSIER EXPORT", COLOR_WHITE, Inches(6.8), Inches(4.5), [
            "Generates print-ready, high-density scientific briefings for expedition field teams.",
            "Includes field logistics: road/air accessibility, isolation metrics, and active research stations.",
            "One-click browser print and JSON data export."
        ])
    ]

    gw = Inches(5.733)
    gh = Inches(2.45)

    for g_title, g_col, gx, gy, g_bullets in grid:
        add_card(s5, gx, gy, gw, gh, g_col)
        tb = s5.shapes.add_textbox(gx + Inches(0.2), gy + Inches(0.15), gw - Inches(0.4), gh - Inches(0.3))
        tf = tb.text_frame
        tf.word_wrap = True
        pt = tf.paragraphs[0]
        pt.text = g_title
        pt.font.bold = True
        pt.font.size = Pt(12)
        pt.font.color.rgb = g_col

        for b in g_bullets:
            pb = tf.add_paragraph()
            pb.text = "• " + b
            pb.font.size = Pt(10)
            pb.font.color.rgb = COLOR_WHITE
            pb.space_before = Pt(3)

    # =========================================================================
    # SLIDE 6: Open NASA & Space Agency Data
    # =========================================================================
    s6 = prs.slides.add_slide(blank_layout)
    set_slide_background(s6)
    add_header(s6, "Data Provenance: 100% Powered by Open Space Agency Datasets")

    # 3 big categories
    cw = Inches(3.64)
    ch = Inches(5.1)
    cy = Inches(1.8)

    # NASA Lunar Missions
    add_card(s6, Inches(0.8), cy, cw, ch, COLOR_CYAN)
    tb_m1 = s6.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(3.24), Inches(4.7))
    tf_m1 = tb_m1.text_frame
    tf_m1.word_wrap = True
    p = tf_m1.paragraphs[0]
    p.text = "NASA LUNAR MISSIONS"
    p.font.bold = True
    p.font.size = Pt(13)
    p.font.color.rgb = COLOR_CYAN

    lunar_ds = [
        "LRO LOLA: Global high-resolution Digital Elevation Models (DEM) 5m/px.",
        "LRO Diviner: Day/night thermal radiometer measurements for PSR cold traps (<40K).",
        "LRO LROC NAC / ShadowCam: Sub-meter imaging of permanently shadowed craters.",
        "GRAIL: Subsurface mass deficit mapping for subterranean lava tube voids."
    ]
    for d in lunar_ds:
        pd = tf_m1.add_paragraph()
        pd.text = "✔ " + d
        pd.font.size = Pt(11)
        pd.font.color.rgb = COLOR_WHITE
        pd.space_before = Pt(10)

    # NASA Mars Missions
    add_card(s6, Inches(4.84), cy, cw, ch, COLOR_MARS)
    tb_m2 = s6.shapes.add_textbox(Inches(5.04), Inches(2.0), Inches(3.24), Inches(4.7))
    tf_m2 = tb_m2.text_frame
    tf_m2.word_wrap = True
    p = tf_m2.paragraphs[0]
    p.text = "NASA MARS EXPLORATION"
    p.font.bold = True
    p.font.size = Pt(13)
    p.font.color.rgb = COLOR_MARS

    mars_ds = [
        "MRO CRISM: Visible and infrared hyperspectral cubes for clays, sulfates, and hematite.",
        "MRO HiRISE: 25 cm/pixel digital terrain models for active dunes and crater walls.",
        "MRO SHARAD: Shallow radar sounding of subsurface ice sheets in Utopia Planitia.",
        "Curiosity & Perseverance: CheMin XRD and SuperCam spectral ground truths."
    ]
    for d in mars_ds:
        pd = tf_m2.add_paragraph()
        pd.text = "✔ " + d
        pd.font.size = Pt(11)
        pd.font.color.rgb = COLOR_WHITE
        pd.space_before = Pt(10)

    # Earth Observation & Partners
    add_card(s6, Inches(8.88), cy, cw, ch, COLOR_EMERALD)
    tb_m3 = s6.shapes.add_textbox(Inches(9.08), Inches(2.0), Inches(3.24), Inches(4.7))
    tf_m3 = tb_m3.text_frame
    tf_m3.word_wrap = True
    p = tf_m3.paragraphs[0]
    p.text = "EARTH SCIENCE & PARTNERS"
    p.font.bold = True
    p.font.size = Pt(13)
    p.font.color.rgb = COLOR_EMERALD

    earth_ds = [
        "NASA Earthdata & GIBS: MODIS Land Surface Temp, ASTER Global DEM, and SRTM.",
        "NASA EMIT: ISS imaging spectrometer mapping arid surface mineralogy in 285 bands.",
        "ESA Copernicus Sentinel-2: Multispectral 10m global surface reflectance.",
        "ESA PANGAEA & JAXA Kaguya: Astronaut cave training archives and Lunar Radar Sounder."
    ]
    for d in earth_ds:
        pd = tf_m3.add_paragraph()
        pd.text = "✔ " + d
        pd.font.size = Pt(11)
        pd.font.color.rgb = COLOR_WHITE
        pd.space_before = Pt(10)

    # =========================================================================
    # SLIDE 7: Mission Impact & Next Steps
    # =========================================================================
    s7 = prs.slides.add_slide(blank_layout)
    set_slide_background(s7)
    add_header(s7, "Impact: De-Risking Humanity's Next Giant Leap")

    # Left Column: Operational Impact
    add_card(s7, Inches(0.8), Inches(1.8), Inches(5.7), Inches(5.1), COLOR_CYAN)
    tb_i1 = s7.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(5.3), Inches(4.7))
    tf_i1 = tb_i1.text_frame
    tf_i1.word_wrap = True
    p = tf_i1.paragraphs[0]
    p.text = "TANGIBLE MISSION VALUE"
    p.font.bold = True
    p.font.size = Pt(13)
    p.font.color.rgb = COLOR_CYAN

    impacts = [
        "For Artemis Astronaut Training: Pinpoints Kilbourne Hole and Iceland as optimal sites for EVA suit traverses, crater rim sample caching, and rover navigation.",
        "For Mars In-Situ Resource Utilization (ISRU): Highlights McMurdo Dry Valleys as the definitive benchmark for validating cryogenic thermal coring drills in permafrost.",
        "For Subsurface Habitats: Validates Lanzarote volcanic lava tubes as physical structural models for lunar radiation-shielded base construction.",
        "Cost Savings: Prevents multi-million dollar hardware design flaws by ground-testing systems in authentic geochemical and mechanical stress conditions."
    ]
    for imp in impacts:
        pi = tf_i1.add_paragraph()
        pi.text = "✔ " + imp
        pi.font.size = Pt(11)
        pi.font.color.rgb = COLOR_WHITE
        pi.space_before = Pt(8)

    # Right Column: Future Roadmap & Team
    add_card(s7, Inches(6.833), Inches(1.8), Inches(5.7), Inches(5.1), COLOR_EMERALD)
    tb_i2 = s7.shapes.add_textbox(Inches(7.033), Inches(2.0), Inches(5.3), Inches(4.7))
    tf_i2 = tb_i2.text_frame
    tf_i2.word_wrap = True
    p = tf_i2.paragraphs[0]
    p.text = "FUTURE ROADMAP & TEAM ARCHIMEDES"
    p.font.bold = True
    p.font.size = Pt(13)
    p.font.color.rgb = COLOR_EMERALD

    roadmaps = [
        "Machine Learning Automated Discovery: Training neural networks on EMIT and Landsat spectra to scan millions of square kilometers for new unmapped analogs.",
        "Integration with NASA Web WorldWind: Upgrading the 2D map into a full interactive 3D digital globe.",
        "Field Expedition Citizen Science: Enabling field researchers to log in-situ ground-truth regolith and radiation data via mobile API.",
        "Team Archimedes: Multidisciplinary innovators bridging planetary science, remote sensing, and aerospace software."
    ]
    for rm in roadmaps:
        pr = tf_i2.add_paragraph()
        pr.text = "➔ " + rm
        pr.font.size = Pt(11)
        pr.font.color.rgb = COLOR_WHITE
        pr.space_before = Pt(8)

    p_end = tf_i2.add_paragraph()
    p_end.text = "EXPLORE LIVE: https://mmmaihdnsc.github.io/luna/"
    p_end.font.bold = True
    p_end.font.size = Pt(12)
    p_end.font.color.rgb = COLOR_CYAN
    p_end.space_before = Pt(14)

    # Save presentation
    output_path = "f:\\NASA\\TERRA-LUNA_Presentation.pptx"
    prs.save(output_path)
    print(f"Presentation saved to: {output_path}")

if __name__ == "__main__":
    create_presentation()
