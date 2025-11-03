# 🦴🔥 Burning Brew — Development Instructions

## ⚙️ Overview

You are an elite front-end engineer and designer working on the outlaw coffee company **Burning Brew**.  
This brand is a dark hymn to caffeine, fossil fuel, and extinction. It’s where **prehistoric power meets post-apocalyptic grit**.  
The website must look **dangerous**, **alive**, and **mechanical**—like it’s been unearthed from a dig site powered by diesel and bad intentions.

This document contains **explicit creative direction** and **structural instructions** for you to follow.  
Do not sanitize, simplify, or beautify this. The site should look **rough**, **industrial**, and **aggressively branded**.  
Everything should feel *fueled by chaos and caffeine*.

---

## 🧱 Frameworks & Stack

- **Framework:** Node.js + Express.js  
- **Frontend:** HTML5, CSS3, JS 
- **Styling:** SCSS or TailwindCSS (developer’s choice, but it must look hand-engineered, not templated)  
- **Linting & Formatting:** Prettier + ESLint (Airbnb config)
- **Accessibility:** WCAG 2.2 AA standards — dark doesn’t mean unreadable.
- **Responsive:** Mobile-first with aggressive scaling and strong type hierarchy.
- **Animations:** Subtle parallax, hover distortions, and micro-interactions using GSAP or CSS transitions.

---

## 🎨 Brand Design System

### 🩸 Color Palette

| Color Role | Hex | Use |
|-------------|-----|-----|
| Void Black | #1a1a1c | Background, header, footer |
| Blood Red | #990000 | Accents, links, CTAs |
| Fossil Bone | #f0e9d6 | Body text, neutral tones |
| Crude Brown | #8b4513 | Buttons, highlights |
| Oxidized Teal | #4a7c7c | Secondary backgrounds |
| Steel Grey | #c8c8c8 | Muted text, borders |
| Hazard Yellow | #ffc72c | Warning labels, callouts |

### 🦕 Typography
- **Anton** — All headers, uppercase, loud, compressed.  
- **Montserrat** — All body text, tight letter-spacing, confident and blunt.

Headers should be **massive**, like “burned onto a steel plate.”  
Body copy should look **manufactured**, slightly mechanical but readable.

---

## ⚡ Voice & Copy Tone

Voice = **Outlaw Preacher**
Tone = **Aggressive, defiant, reverent to the grind**

Use **short, declarative sentences.**
Example:  
> “You need this. The desert demands it.”  
> “They burned. We brewed. Drink what’s left.”

Coffee is **fossil fuel for humans.**  
Lean into this: prehistoric, geologic, ritualistic.  
Think: caffeine as combustion.

---

## 💀 Conceptual Core

Burning Brew is a **religion for caffeine junkies**.  
It’s fossil fuel reincarnated as espresso — **dinosaurs died for our sins**.  
The design should worship extinction, pressure, heat, and survival.

Visual reference:  
- Ancient bones → oil → coffee → survival.  
- Industrial warnings, oil spills, amber fossils.  
- Think if *Mad Max opened a café in a tar pit.*

---

# 🔥 Burning Brew — Sitemap & Page Structure Instructions  

## ⚙️ Overview

You are building a **multi-page website** for **Burning Brew**, the outlaw coffee company.  
This document contains **explicit sitemap and page-level instructions** for structuring routes, content hierarchy, and navigation behavior.  
Follow these directives precisely when constructing the site architecture.  

All pages must share:  
- A **sticky global navigation bar** (top of page)  
- A **unified footer** with caution stripes, fossil iconography, and sign-up form  
- Shared styles for typography, color, and tone consistent with the brand’s outlaw/fossil-fuel aesthetic  

---

## 🌋 SITE STRUCTURE

### `/` — **Home Page**

**Purpose:**  
Introduce the brand mythos and funnel users toward the product catalog or subscription system.

**Sections:**  
1. **Hero Banner**
   - Visual: Fossilized desert, cracked ground, skeletal remains, industrial texture overlay.
   - Rotating slogans:  
     - “Drill Your Day.”  
     - “Fuel for the Reckless.”  
     - “From the Earth to the Grind.”  
   - CTA Button: “Feed the Machine” → links to `/products`.

2. **Brand Manifesto**
   - Header: “We Don’t Brew. We Burn.”
   - Text: Preacher-style monologue about survival, energy, and rebellion.
   - Imagery: Fossil cross-sections or tar pits as background.

3. **Product Teaser Grid**
   - 3 or 4 featured brews with micro-descriptions and “Burn Deeper” CTAs leading to `/products`.

4. **Subscription Promo**
   - Header: “Join the Fossil Order.”
   - Text: Introduce recurring shipments (“Fuel Rations”).
   - Button: “Start the Extraction” → `/products#subscribe`

5. **CTA Footer Banner**
   - Slogan: “Don’t Run on Empty. Go Fossil.”  
   - Button: “Shop the Grind” → `/products`

---

### `/products` — **Product & Purchase Page**

**Purpose:**  
Serve as the central commerce hub — a raw, technical display of offerings like an industrial catalog or refinery manual.

**Sections:**  
1. **Intro Banner**
   - Header: “The Grind.”  
   - Subtext: “Coffee reimagined as crude energy.”  
   - Visual: Oil pump silhouettes or geological diagram textures.

2. **Product Cards (Grid Layout)**
   Each product should have:
   - **Title:**  
     - *Single Origin — “Cruelly extracted from the Guatemalan Fault Line.”*  
     - *Dark Roast — “A High-Octane Black, Sourced from the Deepest Strata.”*  
     - *Espresso — “The Crude Shot. Unfiltered. Unapologetic.”*  
   - **Details Section:**  
     - Roast profile, origin, grind type, and tasting notes styled like warning labels.  
   - **CTA Buttons:**  
     - “Burn Deeper” (Add to Cart)
     - “Plug into the Crude” (Buy Now)
   - Hover effect: Oil slick animation or glowing caution symbol.

3. **Subscription Block**
   - Header: “Fuel Rations.”
   - Description: Subscription for repeat deliveries.
   - CTA: “Keep the Tank Full.”

4. **Technical Warning Footer**
   - “Consumption may result in enlightenment, combustion, or both.”

---

### `/vision` — **Vision Page**

**Purpose:**  
Articulate the brand’s philosophy — caffeine as fossil fuel, the grind as sacred ritual.  
Should feel prophetic, poetic, and apocalyptic.

**Sections:**  
1. **Intro Header**
   - “Why We Burn.”
   - Visual: Monochrome desert fossil bed or collapsing refinery.
   - Subtext: “We worship pressure. We praise the grind.”

2. **Philosophy Copy Block**
   - Paragraphs written like scripture, in broken lines:  
     > “The Earth cracked open and gave us this —  
     > Dark. Rich. Defiant.  
     > This is not coffee. This is resurrection.”

3. **Timeline/Diagram**
   - Infographic illustrating the mythic chain:  
     **Dinosaur → Fossil → Oil → Caffeine → Survival**
   - Style: Vintage geological illustration, labeled with pseudo-scientific terms.

4. **Movement CTA**
   - Header: “Join the Uprising.”  
   - Button: “Fuel the Rebellion” → `/contact`

---

### `/contact` — **Contact Us Page**

**Purpose:**  
Enable users to reach out, join the newsletter, or send messages from the wasteland.

**Sections:**  
1. **Header**
   - “Signal the Outpost.”
   - Subtext: “We respond between dust storms.”

2. **Contact Form**
   - Fields: Name, Email, Message  
   - Placeholder text:  
     - Name → “Alias”  
     - Email → “Transmission ID”  
     - Message → “Speak your heresy.”
   - Button: “Send the Signal” (Blood Red hover animation)

3. **Newsletter Signup**
   - Header: “Join the Fossil Order.”  
   - Subtext: “Receive dispatches from the Grind Frontier.”  
   - Email field + “Subscribe” button.

4. **Map or Visual Accent**
   - Optional: Stylized desert map or fictional coordinates (“Lat 40.7128 N / Long 74.0060 W — The Badlands of Brew”).

5. **Social Links**
   - Icon style: Riveted stencil, monochrome with hover flicker.
   - Platforms: Instagram, Threads, TikTok.

---

## 🧭 Navigation Rules

- **Sticky Navbar** on all pages  
  - Logo: Center or left-aligned, links to `/`  
  - Links: `/products`, `/vision`, `/contact`  
  - Hover: Blood Red underline or oil drip animation  
  - Active page: Highlighted in Hazard Yellow  
  - Mobile: Collapse into hamburger menu (Bone White icon)

- **Footer (Global)**
  - Consistent across pages  
  - Caution stripe top border (#1a1a1c / #ffc72c diagonal gradient)  
  - 3 columns:  
    1. Logo + tagline (“From the Earth to the Grind.”)  
    2. Navigation links (Home, Products, Vision, Contact)  
    3. Newsletter signup + social icons  
  - Bottom bar: “© 2025 Burning Brew. Powered by Prehistoric Decay.”

---

## 🧩 Sitemap Overview (XML-style Reference)

/
├── products/
│ ├── single-origin
│ ├── dark-roast
│ └── espresso
├── vision/
└── contact/


**Notes:**
- Product sub-pages (optional) may reuse `/products` layout with unique imagery and description.
- All pages inherit typography, color palette, and “oil field / fossil fuel” design cues.

---

## 🦴 Closing Reminder

This site isn’t polished — it’s pressurized.  
Every page should feel excavated, not built.  
Structure it like a **fossil record of caffeine and rebellion**,  
where every route leads back to one truth:  
> “They burned. We brewed. Drink what’s left.”

---

## 🧱 Footer Design

**Background:** #1a1a1c   
**Layout:** 3 columns  

**Left Column:**  
- Logo (skull + coffee icon)
- Tagline: *“From the Earth to the Grind.”*

**Center Column:**  
- Links: Products | Vision | Contact | Legal (Privacy, Terms)  
- Text: “© 2025 Burning Brew. Powered by Prehistoric Decay.”

**Right Column:**  
- Newsletter signup:  
  - Header: “Join the Burning Brewery.”  
  - Subtext: “The grind never ends. Get updates straight from the pit.”  
  - Field + Button: “Submit” → turns red with smoke animation on hover.

---

## ⚔️ Additional Design Cues

- **Textures:** Grunge, oil stains, cracked concrete, bone fragments, worn parchment.
- **Borders:** Industrial frames, hazard lines, rivet edges.
- **Hover States:** Flickering lights, heat distortion, oil drip animations.
- **Cursor:** Custom cursor — cracked skull or oil drop.
- **Sound (optional):** Subtle crackling fire or drilling sounds on hover.

---

## 🧠 Developer Notes for Copilot

1. **Every class name** should be semantic and reflect the brand tone:  
   - `class="fossil-section"`, `class="crude-button"`, `class="drill-banner"`
2. **Accessibility**: Maintain high contrast ratios and proper aria-labels. Don’t compromise WCAG compliance for aesthetics.
3. **Animations**: Keep under 3 seconds, loop optional. Use GSAP timelines or keyframes.
4. **Images**: Lazy-load all imagery, alt text must describe *vibe* (“rusted oil rig beneath red sun”) not literal pixels.
5. **Performance**: Optimize for fast load—compress assets, preload fonts, use modern image formats.
6. **Mobile First**: Stack layouts vertically with strong visual hierarchy; no horizontal scroll.
7. **SEO Tags**: Use meta titles, descriptions, and OpenGraph with tone-matching language.

---

## 💣 Closing Note

Burning Brew is **not a coffee brand**—it’s a manifesto.  
Every pixel, line of code, and hover animation should feel *fueled by extinction itself*.  
This is caffeine as religion. Energy as defiance.  

**Remember:**  
> “They burned. We brewed. Drink what’s left.”

Now build the pit.

