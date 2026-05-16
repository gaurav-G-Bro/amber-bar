const PRODUCTS = [
  {
    id: 'amber-sunset',
    name: 'Amber Sunset',
    price: 16,
    category: 'cocktails',
    mood: 'fresh',
    badge: 'Signature',
    desc: 'Aperol, passion fruit, lime, prosecco and a soft citrus perfume.',
    image: 'images/img3.avif',
    tags: ['Aperol', 'Citrus', 'Sparkling']
  },
  {
    id: 'citrus-basil-smash',
    name: 'Citrus Basil Smash',
    price: 15,
    category: 'cocktails',
    mood: 'fresh',
    badge: 'Guest Favorite',
    desc: 'Gin, lemon, basil, honey syrup and chilled crushed ice.',
    image: 'images/img4.avif',
    tags: ['Gin', 'Herbal', 'Bright']
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    price: 16,
    category: 'cocktails',
    mood: 'bold',
    badge: 'Best Seller',
    desc: 'Vodka, espresso, coffee liqueur and silky crema finish.',
    image: 'images/img5.jfif',
    tags: ['Vodka', 'Coffee', 'Rich']
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    price: 15,
    category: 'whiskey',
    mood: 'bold',
    badge: 'Classic',
    desc: 'Bourbon, bitters, orange oil and raw brown sugar.',
    image: 'images/img6.jfif',
    tags: ['Bourbon', 'Bitters', 'Smooth']
  },
  {
    id: 'rooftop-negroni',
    name: 'Rooftop Negroni',
    price: 17,
    category: 'cocktails',
    mood: 'bitter',
    badge: 'House Pour',
    desc: 'Campari, vermouth, gin and orange zest over a single cube.',
    image: 'images/img7.jfif',
    tags: ['Bitter', 'Gin', 'Aromatic']
  },
  {
    id: 'rose-fizz',
    name: 'Rosé Fizz',
    price: 14,
    category: 'sparkling',
    mood: 'fresh',
    badge: 'Light Sip',
    desc: 'Rosé wine, berry cordial, soda and garden mint.',
    image: 'images/img8.jfif',
    tags: ['Rosé', 'Berry', 'Soft']
  },
  {
    id: 'craft-lager',
    name: 'Craft Lager',
    price: 9,
    category: 'beer',
    mood: 'crisp',
    badge: 'Cold Tap',
    desc: 'Clean, bright, lightly malty lager poured fresh from the tap.',
    image: 'images/img9.jfif',
    tags: ['Beer', 'Crisp', 'Draft']
  },
  {
    id: 'lychee-cooler',
    name: 'Lychee Cooler',
    price: 12,
    category: 'mocktails',
    mood: 'fresh',
    badge: 'Zero Proof',
    desc: 'Lychee, lime, cucumber, tonic and a mint bouquet.',
    image: 'images/img10.jfif',
    tags: ['Mocktail', 'Lychee', 'Cool']
  },
  {
    id: 'truffle-sliders',
    name: 'Truffle Sliders',
    price: 18,
    category: 'food',
    mood: 'savory',
    badge: 'Pairing Plate',
    desc: 'Mini brioche burgers, aged cheddar and truffle aioli.',
    image: 'images/img11.jfif',
    tags: ['Food', 'Truffle', 'Shareable']
  },
  {
    id: 'charcuterie-board',
    name: 'Charcuterie Board',
    price: 24,
    category: 'food',
    mood: 'savory',
    badge: 'For Groups',
    desc: 'Cured meats, cheeses, pickles, olives and toasted sourdough.',
    image: 'images/img12.jfif',
    tags: ['Board', 'Cheese', 'Premium']
  },
  {
    id: 'smoked-tacos',
    name: 'Smoked Tacos',
    price: 13,
    category: 'food',
    mood: 'savory',
    badge: 'Bar Bite',
    desc: 'Smoked chicken, salsa verde, crema and charred lime.',
    image: 'images/img13.jfif',
    tags: ['Tacos', 'Smoked', 'Zesty']
  },
  {
    id: 'golden-flight',
    name: 'Golden Flight',
    price: 22,
    category: 'flights',
    mood: 'discovery',
    badge: 'Experience',
    desc: 'Four curated tasting pours guided by our bartender notes.',
    image: 'images/img14.jfif',
    tags: ['Flight', 'Tasting', 'Curated']
  }
];

const EVENTS = [
  {
    id: 'sunset-sessions',
    title: 'Sunset Sessions',
    type: 'live',
    date: 'Fri, May 24',
    time: '7PM - 11PM',
    desc: 'Live DJ set, skyline views and limited sunset cocktails.',
    image: 'images/img15.jfif'
  },
  {
    id: 'ladies-night',
    title: 'Ladies Night',
    type: 'nightlife',
    date: 'Sat, May 25',
    time: '8PM - Close',
    desc: 'Special mixers, sparkling pours and a glamorous rooftop vibe.',
    image: 'images/img16.jfif'
  },
  {
    id: 'cocktail-workshop',
    title: 'Cocktail Workshop',
    type: 'workshop',
    date: 'Thu, May 30',
    time: '7PM - 9PM',
    desc: 'Learn, shake, sip and master three bar classics.',
    image: 'images/img17.jfif'
  },
  {
    id: 'brunch-beats',
    title: 'Brunch & Beats',
    type: 'day',
    date: 'Sun, Jun 02',
    time: '12PM - 4PM',
    desc: 'Bright spritzes, chef boards and chilled Sunday music.',
    image: 'images/img18.jfif'
  },
  {
    id: 'private-mixology',
    title: 'Private Mixology',
    type: 'private',
    date: 'By Request',
    time: 'Custom Slots',
    desc: 'A polished experience for birthdays, teams and celebrations.',
    image: 'images/img19.jfif'
  },
  {
    id: 'gold-hour',
    title: 'Golden Hour',
    type: 'nightlife',
    date: 'Every Friday',
    time: '5PM - 7PM',
    desc: 'Premium pours, small plates and golden skyline light.',
    image: 'images/img20.jfif'
  }
];

const GALLERY = [
  'images/img21.jfif',
  'images/img22.jfif',
  'images/img23.jfif',
  'images/img24.jfif',
  'images/img25.jfif',
  'images/img26.jfif',
  'images/img27.jfif',
  'images/img28.jfif',
  'images/img29.jfif',
  'images/img30.jfif',
  'images/img31.jfif',
  'images/img32.jfif'
];

const TESTIMONIALS = [
  { text: 'The rooftop is stunning, the cocktails are balanced, and the staff made our birthday feel special.', author: 'Mira S.' },
  { text: 'A premium night-out experience without feeling stiff. The espresso martini is genuinely excellent.', author: 'Jordan K.' },
  { text: 'We booked a private table for our team, and everything from menu to music was perfectly handled.', author: 'Priya R.' },
  { text: 'Warm design, quick service and beautiful city views. This place photographs like a dream.', author: 'Aarav M.' },
  { text: 'The menu filtering demo and cart feel like a real ordering website. Very smooth and polished.', author: 'Client Demo' }
];

const CART_KEY = 'amber_social_cart_v1';
let cart = loadCart();
let testimonialIndex = 0;
let activeDiscount = 0;

function $(selector, scope = document) { return scope.querySelector(selector); }
function $$(selector, scope = document) { return Array.from(scope.querySelectorAll(selector)); }

function formatMoney(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function getCartDetails() {
  const rows = cart.map(item => ({ ...item, product: PRODUCTS.find(p => p.id === item.id) })).filter(row => row.product);
  const subtotal = rows.reduce((sum, row) => sum + row.product.price * row.qty, 0);
  const service = subtotal > 0 ? subtotal * 0.05 : 0;
  const discount = subtotal * activeDiscount;
  const tax = (subtotal + service - discount) * 0.08;
  const total = Math.max(0, subtotal + service + tax - discount);
  return { rows, subtotal, service, discount, tax, total };
}

function addToCart(id, qty = 1) {
  const found = cart.find(item => item.id === id);
  if (found) found.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  openCart();
  const product = PRODUCTS.find(p => p.id === id);
  showToast(`${product?.name || 'Item'} added to demo cart.`);
}

function changeQty(id, delta) {
  cart = cart.map(item => item.id === id ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function productCard(product, compact = false) {
  return `
    <article class="product-card" data-product-card data-category="${product.category}" data-mood="${product.mood}">
      <div class="card-media">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-content">
        <div class="product-top">
          <div class="product-title">${product.name}</div>
          <div class="product-price">${formatMoney(product.price)}</div>
        </div>
        <p class="product-desc">${product.desc}</p>
        ${compact ? '' : `<div class="product-tags">${product.tags.map(tag => `<span class="pill">${tag}</span>`).join('')}</div>`}
        <div class="product-actions">
          <button class="btn btn-primary" data-add-cart="${product.id}">Add</button>
          <button class="btn btn-outline" data-quick-view="${product.id}">Quick View</button>
        </div>
      </div>
    </article>
  `;
}

function eventCard(event) {
  return `
    <article class="event-card" data-event-card data-type="${event.type}">
      <img src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="event-body">
        <div class="event-date">${event.date}</div>
        <h4>${event.title}</h4>
        <p>${event.desc}</p>
        <button class="text-link" data-event-demo="${event.id}">Reserve Spot →</button>
      </div>
    </article>
  `;
}

function galleryButton(src, index) {
  return `<button class="gallery-item" data-gallery-index="${index}" aria-label="Open gallery image ${index + 1}"><img src="${src}" alt="Amber Social gallery ${index + 1}" loading="lazy"></button>`;
}

function renderFeatured() {
  const target = $('#featuredProducts');
  if (!target) return;
  target.innerHTML = PRODUCTS.slice(0, 4).map(p => productCard(p, true)).join('');
}

function renderMenu() {
  const target = $('#menuGrid');
  if (!target) return;

  const query = ($('#menuSearch')?.value || '').trim().toLowerCase();
  const category = $('#categoryFilter')?.value || 'all';
  const mood = $('#moodFilter')?.value || 'all';
  const sort = $('#sortFilter')?.value || 'featured';

  let items = PRODUCTS.filter(product => {
    const matchesQuery = [product.name, product.desc, product.category, ...product.tags].join(' ').toLowerCase().includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesMood = mood === 'all' || product.mood === mood;
    return matchesQuery && matchesCategory && matchesMood;
  });

  if (sort === 'price-low') items.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') items.sort((a, b) => b.price - a.price);
  if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));

  target.innerHTML = items.length ? items.map(product => productCard(product)).join('') : `<div class="panel-card"><h3>No drinks found</h3><p>Try removing a filter or searching another flavor.</p></div>`;
  const count = $('#menuCount');
  if (count) count.textContent = `${items.length} item${items.length === 1 ? '' : 's'} available`;
}

function renderEvents(type = 'all') {
  const target = $('#eventsGrid');
  if (!target) return;
  const items = type === 'all' ? EVENTS : EVENTS.filter(event => event.type === type);
  target.innerHTML = items.map(eventCard).join('');
}

function renderHomeEvents() {
  const target = $('#homeEvents');
  if (!target) return;
  target.innerHTML = EVENTS.slice(0, 3).map(eventCard).join('');
}

function renderGallery() {
  const strips = $$('.galleryStrip');
  strips.forEach(strip => {
    const limit = Number(strip.dataset.limit || GALLERY.length);
    strip.innerHTML = GALLERY.slice(0, limit).map(galleryButton).join('');
  });
}

function renderTestimonials() {
  const track = $('#testimonialTrack');
  if (!track) return;
  const visible = [0, 1, 2].map(offset => TESTIMONIALS[(testimonialIndex + offset) % TESTIMONIALS.length]);
  track.innerHTML = visible.map(item => `
    <article class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p>“${item.text}”</p>
      <span>— ${item.author}</span>
    </article>
  `).join('');
}

function renderCartRows(container, pageMode = false) {
  const { rows } = getCartDetails();
  if (!container) return;
  if (!rows.length) {
    container.innerHTML = `<div class="cart-empty"><h3>Your demo cart is empty.</h3><p>Add cocktails or plates from the menu to see calculations.</p></div>`;
    return;
  }
  container.innerHTML = rows.map(row => `
    <div class="cart-row">
      <img src="${row.product.image}" alt="${row.product.name}" loading="lazy">
      <div>
        <h5>${row.product.name}</h5>
        <span>${formatMoney(row.product.price)} each</span>
        <div class="qty-controls">
          <button data-qty="${row.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <strong>${row.qty}</strong>
          <button data-qty="${row.id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove-btn" data-remove-cart="${row.id}">Remove</button>
    </div>
  `).join('');
}

function renderSummary(container) {
  if (!container) return;
  const details = getCartDetails();
  container.innerHTML = `
    <div class="summary-line"><span>Subtotal</span><strong>${formatMoney(details.subtotal)}</strong></div>
    <div class="summary-line"><span>Service charge 5%</span><strong>${formatMoney(details.service)}</strong></div>
    <div class="summary-line"><span>Demo discount</span><strong>- ${formatMoney(details.discount)}</strong></div>
    <div class="summary-line"><span>Estimated tax 8%</span><strong>${formatMoney(details.tax)}</strong></div>
    <div class="summary-line total"><span>Total</span><strong>${formatMoney(details.total)}</strong></div>
  `;
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $$('.cart-count').forEach(el => el.textContent = count);
  renderCartRows($('#drawerCartItems'));
  renderCartRows($('#cartPageItems'), true);
  renderSummary($('#drawerCartSummary'));
  renderSummary($('#cartPageSummary'));
}

function openCart() {
  $('#overlay')?.classList.add('active');
  $('#cartDrawer')?.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeLayers() {
  $('#overlay')?.classList.remove('active');
  $('#cartDrawer')?.classList.remove('active');
  $('#quickModal')?.classList.remove('active');
  $('#galleryModal')?.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function openQuickView(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const modal = $('#quickModal');
  const body = $('#quickModalBody');
  if (!product || !modal || !body) return;
  body.innerHTML = `
    <div class="quick-grid">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <span class="eyebrow">${product.badge}</span>
        <h3>${product.name}</h3>
        <p style="margin-top:14px">${product.desc}</p>
        <div class="product-tags" style="margin:18px 0">${product.tags.map(tag => `<span class="pill">${tag}</span>`).join('')}</div>
        <div class="summary-line total"><span>Demo price</span><strong>${formatMoney(product.price)}</strong></div>
        <button class="btn btn-primary" data-add-cart="${product.id}" style="width:100%;margin-top:16px">Add to Cart</button>
      </div>
    </div>
  `;
  $('#overlay')?.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function openGallery(index) {
  const modal = $('#galleryModal');
  const body = $('#galleryModalBody');
  if (!modal || !body) return;
  const src = GALLERY[index] || GALLERY[0];
  body.innerHTML = `<img src="${src}" alt="Amber Social enlarged gallery" style="width:100%;max-height:78svh;object-fit:contain;border-radius:18px;background:#111">`;
  $('#overlay')?.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function applyPromo() {
  const input = $('#promoCode');
  const code = (input?.value || '').trim().toUpperCase();
  const promos = { AMBER10: 0.10, ROOFTOP15: 0.15 };
  if (promos[code]) {
    activeDiscount = promos[code];
    showToast(`${code} applied to demo cart.`);
  } else {
    activeDiscount = 0;
    showToast('Promo not found. Try AMBER10 or ROOFTOP15.');
  }
  updateCartUI();
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function initDemoForms() {
  $$('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      showToast('Demo purpose only — no real booking/order has been placed.');
      form.reset();
    });
  });
}

function initNavigation() {
  const page = document.body.dataset.page;
  $$(`[data-nav="${page}"]`).forEach(link => link.classList.add('active'));

  const menuToggle = $('#menuToggle');
  const mobilePanel = $('#mobilePanel');

  function closeMobileMenu() {
    mobilePanel?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  menuToggle?.setAttribute('aria-expanded', 'false');

  const desktopQuery = window.matchMedia('(min-width: 921px)');

  menuToggle?.addEventListener('click', event => {
    event.stopPropagation();
    if (!window.matchMedia('(max-width: 920px)').matches) {
      closeMobileMenu();
      return;
    }
    const isOpen = mobilePanel?.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobilePanel?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMobileMenu();
  });

  document.addEventListener('click', event => {
    if (!mobilePanel?.classList.contains('active')) return;
    const clickedInsidePanel = mobilePanel.contains(event.target);
    const clickedToggle = menuToggle?.contains(event.target);
    if (!clickedInsidePanel && !clickedToggle) closeMobileMenu();
  });

  window.addEventListener('scroll', closeMobileMenu, { passive: true });
  window.addEventListener('resize', () => {
    if (desktopQuery.matches) closeMobileMenu();
  });
  desktopQuery.addEventListener?.('change', event => {
    if (event.matches) closeMobileMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
  });
}

function initTabs() {
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab-btn').forEach(other => other.classList.remove('active'));
      btn.classList.add('active');
      renderEvents(btn.dataset.eventType || 'all');
    });
  });
}

function initGlobalEvents() {
  document.addEventListener('click', event => {
    const addBtn = event.target.closest('[data-add-cart]');
    if (addBtn) addToCart(addBtn.dataset.addCart);

    const quickBtn = event.target.closest('[data-quick-view]');
    if (quickBtn) openQuickView(quickBtn.dataset.quickView);

    const qtyBtn = event.target.closest('[data-qty]');
    if (qtyBtn) changeQty(qtyBtn.dataset.qty, Number(qtyBtn.dataset.delta));

    const removeBtn = event.target.closest('[data-remove-cart]');
    if (removeBtn) removeFromCart(removeBtn.dataset.removeCart);

    const galleryBtn = event.target.closest('[data-gallery-index]');
    if (galleryBtn) openGallery(Number(galleryBtn.dataset.galleryIndex));

    const eventBtn = event.target.closest('[data-event-demo]');
    if (eventBtn) showToast('Demo purpose only — event reservation request is not submitted.');
  });

  $$('.open-cart').forEach(btn => btn.addEventListener('click', openCart));
  $$('.close-layer').forEach(btn => btn.addEventListener('click', closeLayers));
  $('#overlay')?.addEventListener('click', closeLayers);
  $('#applyPromo')?.addEventListener('click', applyPromo);
  $('#demoCheckout')?.addEventListener('click', () => showToast('Demo purpose only — checkout is disabled.'));
  $('#drawerCheckout')?.addEventListener('click', () => showToast('Demo purpose only — checkout is disabled.'));
  $('#testimonialPrev')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length; renderTestimonials(); });
  $('#testimonialNext')?.addEventListener('click', () => { testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length; renderTestimonials(); });

  ['menuSearch', 'categoryFilter', 'moodFilter', 'sortFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', renderMenu);
    if (el) el.addEventListener('change', renderMenu);
  });
}

function init() {
  initNavigation();
  initGlobalEvents();
  initDemoForms();
  initTabs();
  renderFeatured();
  renderMenu();
  renderEvents();
  renderHomeEvents();
  renderGallery();
  renderTestimonials();
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', init);
