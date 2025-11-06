# 🧾🔥 Burning Brew — Checkout Flow Instructions (`checkout.html`)

## ⚙️ Overview

This document contains **explicit development and design instructions** for building the **Burning Brew checkout experience** — the point where curiosity combusts into commitment.  
This is not a polite cart page. It’s a ritual. A trade between human fragility and prehistoric power.

The checkout lives in a single file: `checkout.html`.  
It is **triggered by clicking any “Burn Deeper” button** on the `/products` page.  
The flow must look **dark, cinematic, and visceral**, while maintaining **WCAG AA accessibility**, **mobile-first responsiveness**, and a **modern, animated UI**.

Everything here must reinforce the **fossil-fuel-as-caffeine metaphor** — extinction, extraction, and ignition.  
Think *Mad Max meets Stripe Checkout.*

---

## 🧭 User Flow Summary

1. User clicks **“Burn Deeper”** on `/products`.
2. A transition animation (oil splash or fade-to-black with rising heat shimmer) brings them to `/checkout.html`.
3. The checkout page opens with a loading animation that looks like a **drill descending into the earth.**
4. The form fades in, styled like a **hazard form in an abandoned refinery** — clean layout, distressed visuals.
5. The user completes the form and confirms purchase.
6. A confirmation animation plays (bones crack → flame ignition → “You’ve joined the Fossil Order”).
7. Redirect to a **thank-you section** within the same page or modal pop-up.

---

## 🧱 Layout Structure

**Sections (Top to Bottom):**
1. Header (sticky, minimal navigation)
2. Progress Bar (“Extraction Level”)
3. Checkout Form
4. Order Summary
5. Payment Section
6. Confirmation Modal

All elements must appear inside a central container with **max width of 900px**, centered on the screen with adequate breathing room.

---

## 🎨 Visual Identity for Checkout

| Element | Style |
|----------|-------|
| Background | #1a1a1c (matte black) with subtle fossil texture overlay |
| Accent | #990000 (blood red) for buttons and progress indicators |
| Text | #f0e9d6 (fossil bone) for body, #ffc72c (hazard yellow) for highlights |
| Form Fields | Transparent background, light bone-colored borders |
| Buttons | Chunky, rectangular, with rivet-like edges and glowing hover states |
| Icons | Industrial, fossilized, or technical (SVG preferred) |
| Animations | Subtle oil-slick shimmer, glowing heat distortions, smoke on hover |
| Typography | Anton (headers), Montserrat (body), consistent with rest of site |

Accessibility Requirements:
- All inputs labeled.
- Error messages visible and descriptive.
- Minimum 4.5:1 contrast ratio.
- Focus outlines visible (hazard yellow glow).
- Form navigation works via keyboard (TAB, ENTER, SPACE).

---

## 🧾 Header (Sticky)

- Fixed top.
- Black translucent background with red glow at bottom edge.
- Logo on left: Burning Brew skull emblem.
- Right: small link cluster (Products, Vision, Contact).
- When scrolling, background becomes solid black.
- Hover: underline in blood red.

---

## ⛏️ Progress Indicator (Top Section)

- Label: **“Extraction Level”**
- Animated horizontal bar simulating **a drill gauge**.
- Each stage lights up as user progresses:
  1. Info Extraction (customer details)
  2. Refining (payment)
  3. Ignition (confirmation)

Animation: progress bar fills with slow, viscous oil animation.

Use ARIA roles and live region announcements for screen readers to describe progress.

---

## 🧍 Checkout Form Section

### Layout
Two-column grid (stacked on mobile):
- **Left:** Form fields
- **Right:** Order summary + CTA

### Header
Anton, all caps, blood red:
> “Feed the Machine”

### Subheader
Montserrat, smaller:
> “Complete your extraction and fuel your next mission.”

### Fields (WCAG-compliant)
Each with label and aria-describedby text.

**Form Fields:**
- Full Name (`input[type="text"]`)
  - Placeholder: “Who survives the grind?”
- Email (`input[type="email"]`)
  - Placeholder: “Where do we send your coordinates?”
- Shipping Address (`textarea`)
  - Placeholder: “Mark your territory.”
- Select Product (dropdown)
  - Pre-selected from clicked “Burn Deeper” button (auto-fill via URL param or JS).
- Quantity (`number input`, min=1)
- Delivery Option (radio):
  - Standard Burn (3–5 days)
  - Rush Ignition (1–2 days)
- Checkbox:
  - [ ] “Subscribe to the Source (Monthly Rations)” — subscription upsell.

Error states:
- Borders turn red.
- Error message below field: “The machine needs this info.”

Animations:
- Inputs glow faintly when focused (hazard yellow outline).
- Button click emits small “crackling” visual effect.

---

## 🧱 Order Summary Section

Right-hand column (or collapsible drawer on mobile).

**Title:** “Your Fuel Load”  
**Items:** Dynamically populate from product selection.  
Example layout:

Single Origin – 1 Bag – $18.00
Shipping – Standard Burn – $4.00
Subtotal – $22.00
Tax – $1.50
Total – $23.50


Background: slightly lighter (#2a2a2d) panel with riveted corners.  
Font: Montserrat, all uppercase labels, small Anton headers.  
CTA button below: **“Ignite Purchase”** (scrolls to payment section).

---

## 💳 Payment Section

**Header:** “Refining Your Energy”  
**Layout:** Full-width section below form.

Contain:
- Card number, Expiration, CVV (mockup, no live payment integration for dev mode).
- Payment icons (Visa, Mastercard, etc.) in grayscale → turn red on hover.
- Checkbox: “Save payment details for next extraction.”

Button: **“Ignite Transaction”**  
- Blood red background, glowing yellow hover.
- Click triggers confirmation animation (see below).

Animation:
- Background briefly flashes white-to-black like an explosion silhouette.
- Oil texture pulses under screen.

Accessibility:
- Label all inputs with aria tags.
- Disable button while processing.
- Announce progress via live region.

---

## 🔥 Confirmation Modal

Triggered after payment submission (or simulated).

Full-screen modal overlay, black with slight grain and glowing bone-white text.

### Animation Sequence:
1. Bones appear (white outlines).
2. They crack and crumble into ash.
3. Flame rises from the ashes, forming the logo.
4. Text fades in:

> **“You’ve Joined the Fossil Order.”**  
> “The grind welcomes you back to life.”

### Subtext:
> “A confirmation has been sent to your coordinates. The excavation continues.”

**Button:**
> “Return to the Surface” → redirects to `/`

**Accessibility:**
- Modal has focus trap.
- “Escape” closes modal.
- Text readable at 200% zoom.

---

## 📱 Mobile Experience

- All sections stack vertically.
- Progress bar compressed to circular “drill” indicator at top.
- Buttons full-width.
- Order summary collapsible accordion.
- Confirm animation simplified (bones fade + logo ignite).

---

## 🧠 Developer Implementation Notes

1. **File Structure**
   - `checkout.html` uses same header/footer as other pages.
   - Scripts for progress animation, field validation, and modal.
   - Lazy-load animations to maintain performance.

2. **Dynamic Product Handling**
   - When user clicks “Burn Deeper” on `/products`, append URL param `?product=[name]`.
   - `checkout.html` auto-fills “Select Product” dropdown accordingly.

3. **Form Validation**
   - JavaScript validation with ARIA-compliant alerts.
   - Prevent submission on empty fields; display contextual errors.
   - Ensure no flashing animations exceed WCAG seizure guidelines (≤3 flashes/sec).

4. **Animations**
   - Use CSS keyframes for small effects (hover, shimmer).
   - Use GSAP for larger sequences (page transition, confirmation).

5. **SEO & Meta**
   - Title: “Checkout | Burning Brew — Feed the Machine”
   - Description: “Complete your extraction. Power the rebellion with Burning Brew.”

6. **Performance**
   - Defer JS.
   - Use compressed images (WebP).
   - Use `<link rel="preconnect">` for Google Fonts.

---

## 🧩 Accessibility Checklist

- [x] All interactive elements keyboard-navigable.
- [x] Visible focus outlines.
- [x] High contrast text/background.
- [x] No timed interactions or motion triggers.
- [x] Descriptive alt text for all imagery (e.g., “fossilized skull cracking open”).
- [x] Screen reader-friendly progress narration.
- [x] ARIA live regions for validation and loading messages.

---

## ⚒️ Suggested Class Naming (for Copilot)

| Component | Class |
|------------|-------|
| Page Container | `.checkout-pit` |
| Header | `.checkout-header` |
| Progress Bar | `.extraction-level` |
| Form Section | `.feed-the-machine` |
| Order Summary | `.fuel-load` |
| Payment Section | `.refining-energy` |
| Confirmation Modal | `.fossil-order-modal` |
| CTA Buttons | `.ignite-btn`, `.burn-btn`, `.surface-btn` |

---

## 💣 Closing Directive

This isn’t a checkout.  
It’s an **initiation ritual**.  
Every animation, line of code, and label must make the user feel like they’re entering the fossil furnace willingly — for caffeine, for rebellion, for the grind.

**Final Copy Reminder:**
> “They burned. We brewed. Drink what’s left.”  
> “Your extraction begins now.”

Build it to burn.

