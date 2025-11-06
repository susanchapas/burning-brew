// Crack open the barrel. Pull data from storage.
const CART_KEY = 'burningBrewCart';

const PRODUCTS = {
  singleOrigin: { id: 'singleOrigin', name: 'Single Origin', price: 18 },
  darkRoast: { id: 'darkRoast', name: 'Dark Roast', price: 18 },
  theBlend: { id: 'theBlend', name: 'The Blend', price: 16 }
};

const qs = selector => document.querySelector(selector);
const qsa = selector => Array.from(document.querySelectorAll(selector));

let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return { items: [] };
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load cart', e);
    return { items: [] };
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

function findItem(id) {
  return cart.items.find(it => it.id === id);
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS[productId];
  if (!prod) return;
  const existing = findItem(productId);
  if (existing) existing.quantity += qty;
  else cart.items.push({ id: prod.id, name: prod.name, price: prod.price, quantity: qty });
  saveCart();
  updateCartDropdown();
}

function removeFromCart(productId) {
  cart.items = cart.items.filter(i => i.id !== productId);
  saveCart();
  updateCartDropdown();
}

function changeQuantity(productId, delta) {
  const it = findItem(productId);
  if (!it) return;
  it.quantity = Math.max(0, it.quantity + delta);
  if (it.quantity === 0) removeFromCart(productId);
  else saveCart();
  updateCartDropdown();
}

function calculateTotal() {
  const subtotal = cart.items.reduce((s, it) => s + it.price * it.quantity, 0);
  return subtotal;
}

function formatCurrency(v) { return '$' + v.toFixed(2); }

function updateCartDropdown() {
  const dropdown = qs('#cart-dropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'cart-header';
  header.innerHTML = '<strong>The Crude Barrel</strong><div class="cart-sub">Your sins, your caffeine.</div>';
  dropdown.appendChild(header);

  const list = document.createElement('div');
  list.className = 'cart-items';
  if (!cart.items || cart.items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'cart-empty';
    empty.textContent = 'No fuel yet. Burn something.';
    list.appendChild(empty);
  } else {
    cart.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `
        <div class="cart-row-left">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-controls">
            <button class="qty-btn dec" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button>
            <span class="qty" aria-live="polite">${item.quantity}</span>
            <button class="qty-btn inc" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
        </div>
        <div class="cart-row-right">${formatCurrency(item.price * item.quantity)}</div>
      `;
      list.appendChild(row);
    });
  }
  dropdown.appendChild(list);

  const footer = document.createElement('div');
  footer.className = 'cart-footer';
  const total = calculateTotal();
  footer.innerHTML = `
    <div class="cart-total"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
    <button class="btn checkout-btn" id="cart-checkout">BURN FUEL →</button>
  `;
  dropdown.appendChild(footer);

  // attach handlers for qty buttons & checkout
  qsa('.qty-btn.inc').forEach(b => b.addEventListener('click', e => { changeQuantity(e.currentTarget.dataset.id, 1); }));
  qsa('.qty-btn.dec').forEach(b => b.addEventListener('click', e => { changeQuantity(e.currentTarget.dataset.id, -1); }));
  const co = qs('#cart-checkout');
  if (co) co.addEventListener('click', redirectToCheckout);
}

function redirectToCheckout() {
  saveCart();
  // go to checkout page where script will render cart
  window.location.href = 'checkout.html';
}

function openDropdown() {
  const icon = qs('#cart-icon');
  const dropdown = qs('#cart-dropdown');
  if (!dropdown || !icon) return;
  icon.setAttribute('aria-expanded', 'true');
  dropdown.classList.remove('hidden');
  dropdown.setAttribute('aria-hidden', 'false');
  dropdown.classList.add('open');
  // focus first focusable inside
  setTimeout(()=>{
    const focusable = dropdown.querySelector('button, [tabindex]:not([tabindex="-1"])');
    if(focusable) focusable.focus();
  }, 120);
}

function closeDropdown() {
  const icon = qs('#cart-icon');
  const dropdown = qs('#cart-dropdown');
  if (!dropdown || !icon) return;
  icon.setAttribute('aria-expanded', 'false');
  dropdown.classList.add('hidden');
  dropdown.setAttribute('aria-hidden', 'true');
  dropdown.classList.remove('open');
}

function toggleDropdown() {
  const d = qs('#cart-dropdown');
  if (!d) return;
  if (d.classList.contains('hidden')) openDropdown(); else closeDropdown();
}

// Toast
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'cart-toast';
  t.setAttribute('role','status');
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('visible'));
  setTimeout(()=>{ t.classList.remove('visible'); setTimeout(()=>t.remove(),300); }, 1300);
}

// Hook up burn buttons
function wireBurnButtons(){
  qsa('.burn-btn').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const pid = e.currentTarget.dataset.product;
      if(!pid) return;
      addToCart(pid, 1);
      // visual pulse
      btn.classList.add('pulse');
      setTimeout(()=>btn.classList.remove('pulse'), 260);
      // small toast
      showToast('Added to the Grind.');
      // open dropdown briefly
      const dd = qs('#cart-dropdown');
      if(dd && dd.classList.contains('hidden')){
        openDropdown();
      } else {
        updateCartDropdown();
      }
    });
  });
}

// Click outside & ESC to close
function bindGlobalHandlers(){
  document.addEventListener('click', (e)=>{
    const dropdown = qs('#cart-dropdown');
    const icon = qs('#cart-icon');
    if(!dropdown || !icon) return;
    if(dropdown.classList.contains('hidden')) return;
    if(e.target.closest('#cart-dropdown') || e.target.closest('#cart-icon')) return;
    closeDropdown();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeDropdown();
    if(e.key === 'Tab'){
      const dropdown = qs('#cart-dropdown');
      if(!dropdown || dropdown.classList.contains('hidden')) return;
      const focusables = dropdown.querySelectorAll('button, [href], input, select, textarea');
      if(focusables.length===0) return;
      const first = focusables[0];
      const last = focusables[focusables.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
}

function initCartUI(){
  const icon = qs('#cart-icon');
  const mobileIcon = qs('#mobile-cart-icon');
  if(icon) icon.addEventListener('click', (e)=>{ e.preventDefault(); toggleDropdown(); });
  if(mobileIcon) mobileIcon.addEventListener('click', (e)=>{ e.preventDefault(); toggleDropdown(); });
  updateCartDropdown();
  wireBurnButtons();
  bindGlobalHandlers();
}

document.addEventListener('DOMContentLoaded', initCartUI);
