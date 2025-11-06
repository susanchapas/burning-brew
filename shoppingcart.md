# 🔥 Burning Brew Cart System — Developer Instructions

## FILE: `/js/cart.js`
> This file handles all cart logic, storage, and rendering. The cart should behave like a *fossil-fueled machine*, powering the checkout flow. Every animation and transition should feel mechanical, tense, and alive.

---

### 🧠 Brand Context
Burning Brew is an outlaw coffee company built on *defiance, decay, and caffeine as fossil fuel.*  
The site is industrial, textured, and harsh. Every interaction should feel like *metal grinding against metal* — purposeful, unpolished, and unstoppable.

Tone of voice:  
**Hard, clipped, confident.**  
Example:  
> “Burn deeper. The grind never dies.”  
> “Add it. Own it. The desert doesn’t wait.”

Color palette:  
- Black oil: `#1a1a1c`  
- Blood red: `#990000`  
- Ash white: `#f0e9d6`  
- Burnt brown: `#8b4513`  
- Oxidized teal: `#4a7c7c`  
- Bone gray: `#c8c8c8`  
- Warning yellow: `#ffc72c`

Typography:
- **Anton** (headers)
- **Montserrat** (body)

---

## 🧩 Overall Behavior

1. **Click “Burn Deeper”** on any product card:
   - Adds that product to the cart.
   - Animates a quick *shockwave effect* (like a heat ripple) over the button.
   - Triggers a low rumble sound effect (optional).

2. **Cart Icon (`shopping-cart.svg`) in Nav:**
   - Displays a dropdown panel on click.
   - Shows list of items, quantity, and total.
   - Dropdown has distressed black background (`#1a1a1c`) with subtle noise texture and thin yellow borders (`#ffc72c`).
   - “Checkout” button at the bottom of dropdown redirects to `checkout.html`, carrying cart data via `localStorage`.

3. **Data Persistence:**
   - Store cart data in `localStorage` as JSON:
     ```json
     {
       "singleOrigin": {"name": "Single Origin", "price": 18, "quantity": 1},
       "darkRoast": {"name": "Dark Roast", "price": 18, "quantity": 2}
     }
     ```
   - Cart should persist across refresh and navigation.

4. **WCAG Compliance:**
   - All cart buttons require accessible labels (e.g., `aria-label="Add Single Origin to cart"`).
   - Dropdown must be keyboard accessible (`Tab` and `Enter` to navigate).
   - High color contrast for text (minimum 4.5:1).
   - Focus states must glow slightly red/yellow to indicate activation.

---

## 🧱 Components

### 1. Cart Icon and Dropdown (`nav`)

#### Structure:
```html
<nav class="main-nav">
  <img src="shopping-cart.svg" id="cart-icon" alt="View shopping cart" />
  <div id="cart-dropdown" class="hidden" aria-live="polite"></div>
</nav>

Dropdown Styling:
- Appears from top-right with a “slide-down” and fade effect (CSS animation).
- Background: #1a1a1c
- Text: #f0e9d6
- Borders: 1px solid #ffc72c
- Each item row separated by 1px gray line (#4a7c7c).
- “Checkout” button: full-width, #990000 background, white text, uppercase “BURN FUEL →”

Dropdown Content Layout:
- Product Name
- Quantity Controls (± buttons)
- Individual Item Subtotal
- Total (bold)
- Checkout Button

Add the Button:
Each product card on /products.html should include:
<button class="burn-btn" data-product="singleOrigin" aria-label="Add Single Origin to cart">
  Burn Deeper
</button>

Other product buttons:
- data-product="darkRoast"
- data-product="theBlend"

JS Event Logic:
- When user clicks, product is added (or quantity incremented).
- Trigger small CSS pulse animation (use keyframes: scale(1) → scale(1.05) → scale(1)).
- Toast message appears briefly: “Added to the Grind.”

JavaScript Behavior
Variables:
const cart = JSON.parse(localStorage.getItem("burningBrewCart")) || {};

Functions:
addToCart(productId)


Look up product by ID and add or increment quantity.


Save to localStorage.


Update dropdown UI immediately if open.


updateCartDropdown()


Renders list of items and totals.


If empty: show message — “No fuel yet. Burn something.”


calculateTotal()


Returns formatted $XX.XX total.


redirectToCheckout()


Saves cart to localStorage.


Navigates to /checkout.html.



🖥️ Cart Dropdown Interactions


Click Outside closes dropdown.


ESC key closes dropdown.


Tab focus cycles through items.


Checkout button is the last focusable element; pressing Enter redirects.



🎨 Animation & Visual Identity
Animations should feel:


Industrial. Harsh. Kinetic.


Example: dropdown “clanks” open with a 0.2s shake on impact.


Add low-opacity smoke texture overlay (background-blend-mode: multiply).


CSS Hints:
@keyframes dropdownOpen {
  0% { transform: translateY(-10px); opacity: 0; }
  80% { transform: translateY(2px); opacity: 1; }
  100% { transform: translateY(0); }
}

Use this animation on #cart-dropdown when toggled open.

🛒 Cart Data Example
{
  "items": [
    { "id": "singleOrigin", "name": "Single Origin", "price": 18, "quantity": 1 },
    { "id": "darkRoast", "name": "Dark Roast", "price": 18, "quantity": 1 },
    { "id": "theBlend", "name": "The Blend", "price": 16, "quantity": 2 }
  ],
  "total": 68
}


💀 Thematic Details


Header for dropdown: “The Crude Barrel”


Subheader: “Your sins, your caffeine.”


Add faint dinosaur fossil watermark behind items (SVG overlay with opacity 0.05).


“Checkout” button hover text: “Drain the Tank.”



🧼 Code Quality


Use Prettier and ESLint (airbnb config preferred).


Use modern ES6 syntax: const, let, arrow functions.


Keep all DOM selectors modular and cached.


Write comments in this tone:
// Crack open the barrel. Pull data from storage.




🔁 Summary of Flow
- User browses /products.html
- Clicks Burn Deeper on product → Added to Cart
- Cart icon animates briefly (like a heat pulse)
- Dropdown reveals items + total
- User clicks Checkout
- Redirects to /checkout.html carrying cart data in localStorage
- Checkout page reads stored data and renders confirmation

🔚 Final Note
The cart experience should feel like fueling up before a dangerous journey.
Each interaction — a spark. Each button — a trigger.
Nothing should feel gentle. No smooth gradients. Just metal, dust, and caffeine.
---

