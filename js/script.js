"use strict";

/*
|--------------------------------------------------------------------------
| LUMÉA SALON - MAIN JAVASCRIPT
|--------------------------------------------------------------------------
| Everything that should be changed by the salon owner is intentionally
| kept near the top of this file.
|--------------------------------------------------------------------------
*/

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const SALON = {
  name: "LUMÉA Salon",
  phone: "+91 91XXXXXXXX",
  email: "hello@your-salon.com",
  address: "123 Your Main Road, Your Locality, Mumbai, Maharashtra"
};

/*
|--------------------------------------------------------------------------
| SERVICE DATA
|--------------------------------------------------------------------------
*/

const services = {
  men: {
    haircut: [
      ["Classic Cut", "A clean and timeless haircut.", "₹250", "30 min"],
      ["Fade Cut", "A modern fade with a polished finish.", "₹350", "40 min"],
      ["Taper Fade", "A refined taper with a sharp silhouette.", "₹350", "40 min"],
      ["Buzz Cut", "Simple, clean and low maintenance.", "₹220", "20 min"],
      ["Crew Cut", "Classic short styling with definition.", "₹250", "30 min"],
      ["Undercut", "Bold contrast with clean sides.", "₹350", "40 min"],
      ["Textured Cut", "Modern texture for natural movement.", "₹350", "40 min"],
      ["Layer Cut", "Soft layers with a contemporary finish.", "₹400", "45 min"]
    ],

    "hair-styling": [
      ["Classic Styling", "Everyday styling with a clean finish.", "₹200", "20 min"],
      ["Textured Styling", "Texture and volume for a modern look.", "₹250", "25 min"],
      ["Party Styling", "A sharper style for special occasions.", "₹350", "35 min"]
    ],

    "beard-shave": [
      ["Beard Trim", "A neat, balanced beard trim.", "₹150", "15 min"],
      ["Beard Shaping", "Detailed shaping for a defined beard.", "₹200", "20 min"],
      ["Full Beard", "Complete beard grooming and finishing.", "₹250", "25 min"],
      ["Stubble", "Precise short stubble maintenance.", "₹150", "15 min"],
      ["Goatee", "Detailed goatee shaping.", "₹180", "20 min"],
      ["French Beard", "Classic French beard definition.", "₹180", "20 min"],
      ["Clean Shave", "Traditional clean shave with a smooth finish.", "₹180", "20 min"],
      ["Moustache Styling", "Shape and refine your moustache.", "₹100", "10 min"]
    ],

    "hair-colour": [
      ["Global Colour", "Full-head colour application.", "₹1,200", "90 min"],
      ["Root Colour", "Professional root coverage.", "₹650", "60 min"],
      ["Highlights", "Subtle dimension and contrast.", "₹1,500", "120 min"],
      ["Grey Coverage", "Natural-looking grey coverage.", "₹800", "60 min"]
    ],

    "hair-treatment": [
      ["Hair Spa", "Relaxing nourishment for dry or tired hair.", "₹650", "60 min"],
      ["Scalp Treatment", "Focused care for the scalp.", "₹700", "50 min"],
      ["Keratin Care", "Smoothing-focused professional treatment.", "₹2,500", "150 min"]
    ],

    "facial-skin": [
      ["Cleanup", "A refreshing basic skin cleanup.", "₹450", "40 min"],
      ["Basic Facial", "Gentle facial care for fresh-looking skin.", "₹650", "50 min"],
      ["Glow Facial", "A brightening and refreshing facial.", "₹900", "60 min"],
      ["De-Tan", "Care designed to refresh sun-exposed skin.", "₹700", "45 min"],
      ["Acne Care", "Gentle care for acne-prone skin.", "₹850", "60 min"],
      ["Charcoal Facial", "Deep-cleansing charcoal facial.", "₹900", "60 min"]
    ],

    grooming: [
      ["Eyebrow Grooming", "Quick and precise eyebrow grooming.", "₹80", "10 min"],
      ["Head Massage", "Relaxing scalp and head massage.", "₹250", "20 min"],
      ["Complete Grooming", "A convenient grooming combination.", "₹550", "60 min"]
    ],

    "hands-feet": [
      ["Manicure", "Clean and neat hand care.", "₹400", "40 min"],
      ["Pedicure", "Relaxing foot care and finishing.", "₹500", "45 min"]
    ]
  },

  women: {
    haircut: [
      ["U-Cut", "A soft, flattering U-shaped cut.", "₹450", "45 min"],
      ["V-Cut", "Defined layers with a V-shaped finish.", "₹500", "45 min"],
      ["Layer Cut", "Classic layers for movement and volume.", "₹600", "60 min"],
      ["Step Cut", "Distinct steps for a lively silhouette.", "₹600", "60 min"],
      ["Feather Cut", "Soft feathered layers and movement.", "₹650", "60 min"],
      ["Bob Cut", "A polished contemporary bob.", "₹650", "60 min"],
      ["Butterfly Cut", "Voluminous layers with a modern finish.", "₹750", "70 min"],
      ["Bangs", "Face-framing fringe and finishing.", "₹300", "30 min"]
    ],

    "hair-styling": [
      ["Blow Dry", "Smooth professional blow-dry styling.", "₹450", "40 min"],
      ["Curls", "Soft curls with lasting definition.", "₹700", "60 min"],
      ["Straight Styling", "Sleek, polished temporary styling.", "₹650", "60 min"],
      ["Party Hairstyle", "Event-ready professional styling.", "₹1,000", "75 min"]
    ],

    "hair-colour": [
      ["Global Colour", "Full-head professional colour.", "₹1,800", "120 min"],
      ["Root Colour", "Precise root coverage.", "₹900", "75 min"],
      ["Highlights", "Dimensional highlights tailored to your style.", "₹1,800", "150 min"],
      ["Balayage", "Soft hand-painted colour dimension.", "₹3,500", "180 min"],
      ["Grey Coverage", "Natural-looking grey coverage.", "₹1,000", "75 min"]
    ],

    "hair-treatment": [
      ["Hair Spa", "Deep nourishment and relaxation.", "₹900", "75 min"],
      ["Keratin", "Smoothing-focused professional treatment.", "₹3,500", "180 min"],
      ["Smoothening", "Sleek, manageable hair with professional care.", "₹3,500", "180 min"],
      ["Straightening", "Professional long-lasting straightening.", "₹4,000", "210 min"],
      ["Scalp Treatment", "Focused scalp care and nourishment.", "₹850", "60 min"]
    ],

    "facial-skin": [
      ["Cleanup", "A fresh and gentle skin cleanup.", "₹500", "40 min"],
      ["Basic Facial", "Classic facial care for refreshed skin.", "₹800", "60 min"],
      ["Glow Facial", "Brightening facial for a radiant finish.", "₹1,100", "70 min"],
      ["De-Tan", "Refreshing treatment for sun-exposed skin.", "₹900", "55 min"],
      ["Acne Facial", "Gentle care for acne-prone skin.", "₹1,100", "70 min"],
      ["Gold Facial", "Luxurious facial with a radiant finish.", "₹1,400", "75 min"],
      ["Bridal Facial", "Special-occasion skin preparation.", "₹1,800", "90 min"]
    ],

    threading: [
      ["Eyebrow", "Precise eyebrow shaping.", "₹80", "10 min"],
      ["Upper Lip", "Quick and precise upper-lip threading.", "₹60", "10 min"],
      ["Forehead", "Clean and neat forehead threading.", "₹60", "10 min"],
      ["Full Face", "Complete facial threading service.", "₹300", "30 min"]
    ],

    waxing: [
      ["Full Arms", "Smooth full-arm waxing.", "₹500", "30 min"],
      ["Half Arms", "Smooth half-arm waxing.", "₹300", "20 min"],
      ["Full Legs", "Complete leg waxing service.", "₹700", "40 min"],
      ["Half Legs", "Lower-leg waxing.", "₹450", "30 min"],
      ["Underarms", "Quick and neat underarm waxing.", "₹200", "15 min"],
      ["Full Body", "Complete body waxing service.", "₹2,000", "120 min"]
    ],

    nails: [
      ["Manicure", "Professional hand and nail care.", "₹500", "45 min"],
      ["Pedicure", "Relaxing foot and nail care.", "₹650", "50 min"],
      ["Gel Nails", "Glossy long-lasting gel finish.", "₹1,000", "75 min"],
      ["French Nails", "Classic elegant French finish.", "₹900", "60 min"],
      ["Nail Art", "Creative personalised nail design.", "₹1,000", "75 min"],
      ["Nail Extensions", "Elegant extensions with finishing.", "₹1,800", "120 min"]
    ],

    makeup: [
      ["Basic Makeup", "Fresh makeup for everyday occasions.", "₹1,200", "60 min"],
      ["Party Makeup", "Polished makeup for special events.", "₹2,000", "90 min"],
      ["Engagement Makeup", "Elevated event-ready makeup.", "₹3,000", "120 min"],
      ["Bridal Makeup", "Complete bridal makeup experience.", "₹7,500", "180 min"]
    ],

    "massage-spa": [
      ["Head Massage", "Relaxing scalp and head massage.", "₹350", "30 min"],
      ["Relaxation Massage", "Gentle relaxing body massage.", "₹1,200", "60 min"]
    ]
  },

  boys: {
    haircut: [
      ["Classic Kids Cut", "A neat, age-appropriate classic cut.", "₹200", "25 min"],
      ["Short Cut", "Easy-maintenance short haircut.", "₹200", "25 min"],
      ["Fade Cut", "Modern kid-friendly fade.", "₹250", "30 min"],
      ["Crew Cut", "Clean and practical crew cut.", "₹200", "25 min"],
      ["Buzz Cut", "Simple, cool and low-maintenance.", "₹180", "20 min"],
      ["School Cut", "Neat school-friendly haircut.", "₹180", "20 min"]
    ],

    "hair-styling": [
      ["Spiky Style", "Fun textured styling for special days.", "₹180", "20 min"],
      ["Side Part", "Classic side-part styling.", "₹180", "20 min"],
      ["Textured Style", "Natural texture with light styling.", "₹200", "20 min"],
      ["Party Styling", "Special styling for events.", "₹300", "30 min"]
    ],

    "hair-wash": [
      ["Kids Hair Wash", "Gentle shampoo and rinse.", "₹100", "15 min"],
      ["Shampoo & Conditioning", "Gentle wash with conditioning.", "₹150", "20 min"]
    ],

    grooming: [
      ["Basic Hair Setting", "Quick styling for a polished look.", "₹150", "15 min"],
      ["Gentle Head Massage", "Relaxing gentle scalp massage.", "₹150", "15 min"]
    ],

    "special-occasion": [
      ["Birthday Hairstyle", "Fun styling for a special birthday.", "₹300", "30 min"],
      ["Party Hairstyle", "Playful party-ready styling.", "₹350", "35 min"]
    ]
  },

  girls: {
    haircut: [
      ["Kids Bob Cut", "Cute and practical bob styling.", "₹250", "30 min"],
      ["U-Cut", "Soft U-shaped kids cut.", "₹250", "30 min"],
      ["Step Cut", "Light steps for playful movement.", "₹300", "35 min"],
      ["Layer Cut", "Soft layered kids haircut.", "₹350", "40 min"],
      ["Bangs", "Cute face-framing bangs.", "₹150", "15 min"],
      ["Short Cut", "Easy and comfortable short styling.", "₹220", "25 min"]
    ],

    "hair-styling": [
      ["Ponytail", "Neat everyday ponytail styling.", "₹150", "15 min"],
      ["Braids", "Simple or playful braid styling.", "₹200", "20 min"],
      ["Curls", "Soft curls for special occasions.", "₹300", "30 min"],
      ["Simple Hairstyle", "Easy everyday styling.", "₹200", "20 min"],
      ["Party Hairstyle", "Fun styling for events.", "₹350", "35 min"]
    ],

    "hair-wash": [
      ["Kids Hair Wash", "Gentle shampoo and rinse.", "₹100", "15 min"],
      ["Shampoo & Conditioning", "Gentle wash with conditioning.", "₹150", "20 min"]
    ],

    nails: [
      ["Nail Cleaning", "Gentle nail cleaning and care.", "₹100", "15 min"],
      ["Nail Shaping", "Simple neat nail shaping.", "₹120", "15 min"],
      ["Kids Manicure", "Gentle manicure designed for kids.", "₹250", "30 min"],
      ["Simple Nail Art", "Fun and simple nail designs.", "₹250", "25 min"]
    ],

    grooming: [
      ["Hair Accessories Styling", "Beautiful accessory placement.", "₹150", "15 min"],
      ["Simple Hairstyling", "Neat everyday styling.", "₹200", "20 min"]
    ],

    "special-occasion": [
      ["Birthday Hairstyle", "Cute styling for birthday celebrations.", "₹300", "30 min"],
      ["Party Hairstyle", "Playful party-ready styling.", "₹350", "35 min"],
      ["Festival Hairstyle", "Festive styling with accessories.", "₹400", "40 min"]
    ]
  }
};

/*
|--------------------------------------------------------------------------
| CATEGORY LABELS
|--------------------------------------------------------------------------
*/

const categoryLabels = {
  haircut: ["Haircut", "✂", "Cuts designed around your features."],
  "hair-styling": ["Hair Styling", "✦", "Polished everyday and occasion styling."],
  "beard-shave": ["Beard & Shave", "⌁", "Sharp trims, shaping and classic shaving."],
  "hair-colour": ["Hair Colour", "◈", "Colour, coverage and dimension."],
  "hair-treatment": ["Hair Treatment", "◇", "Nourishment, smoothing and scalp care."],
  "facial-skin": ["Facial & Skin", "○", "Professional skin care and facials."],
  threading: ["Threading", "⌁", "Precise facial threading services."],
  waxing: ["Waxing", "—", "Smooth and comfortable waxing services."],
  nails: ["Nails", "✧", "Manicure, pedicure and nail styling."],
  makeup: ["Makeup", "◌", "Beauty looks for everyday and occasions."],
  grooming: ["Grooming", "◎", "Finishing touches and personal care."],
  "hands-feet": ["Hands & Feet", "◇", "Clean, polished hand and foot care."],
  "massage-spa": ["Massage & Spa", "∿", "Relaxing treatments for mind and body."],
  "hair-wash": ["Hair Wash", "⌁", "Gentle washing and conditioning."],
  "special-occasion": ["Special Occasion", "✦", "Fun styling for memorable moments."]
};

const allCategoryOrder = [
  "haircut",
  "hair-styling",
  "beard-shave",
  "hair-colour",
  "hair-treatment",
  "facial-skin",
  "threading",
  "waxing",
  "nails",
  "makeup",
  "grooming",
  "hands-feet",
  "massage-spa",
  "hair-wash",
  "special-occasion"
];

/*
|--------------------------------------------------------------------------
| PRODUCTS
|--------------------------------------------------------------------------
*/

const products = [
  {
    name: "Repair Shampoo",
    category: "hair-care",
    categoryLabel: "Hair Care",
    description: "Gentle cleansing for dry, stressed hair.",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Daily Conditioner",
    category: "hair-care",
    categoryLabel: "Hair Care",
    description: "Smooth conditioning for manageable hair.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Silk Hair Serum",
    category: "hair-care",
    categoryLabel: "Hair Care",
    description: "Lightweight serum for shine and smoothness.",
    price: "₹750",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Nourishing Hair Mask",
    category: "hair-care",
    categoryLabel: "Hair Care",
    description: "Rich weekly care for softer-looking hair.",
    price: "₹850",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Beard Oil",
    category: "beard-care",
    categoryLabel: "Beard Care",
    description: "Lightweight oil for a softer, groomed beard.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Beard Wash",
    category: "beard-care",
    categoryLabel: "Beard Care",
    description: "Gentle cleansing designed for facial hair.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Gentle Face Wash",
    category: "skin-care",
    categoryLabel: "Skin Care",
    description: "Fresh daily cleansing without over-drying.",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Hydrating Face Mask",
    category: "skin-care",
    categoryLabel: "Skin Care",
    description: "Comforting hydration for tired-looking skin.",
    price: "₹700",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Matte Hair Wax",
    category: "styling",
    categoryLabel: "Styling",
    description: "Flexible hold with a clean matte finish.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Styling Gel",
    category: "styling",
    categoryLabel: "Styling",
    description: "Defined styling with dependable hold.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
  }
];

/*
|--------------------------------------------------------------------------
| COMMON HEADER / FOOTER
|--------------------------------------------------------------------------
*/

function renderHeader() {
  const headerTarget = document.getElementById("site-header");

  if (!headerTarget) return;

  const page = document.body.dataset.page || "home";

  headerTarget.innerHTML = `
    <header class="site-header ${page === "home" ? "site-header--hero" : ""}">
      <div class="container site-header__inner">

        <a class="logo" href="index.html" aria-label="LUMÉA Salon home">
          <span class="logo-mark">L</span>
          <span class="logo-copy">
            <span class="logo-name">LUMÉA</span>
            <span class="logo-tagline">SALON · BEAUTY · GROOMING</span>
          </span>
        </a>

        <nav class="site-nav" id="siteNav" aria-label="Primary navigation">
          <a href="index.html" data-nav="home">Home</a>
          <a href="about.html" data-nav="about">About</a>
          <a href="services.html" data-nav="services">Services</a>
          <a href="products.html" data-nav="products">Products</a>
          <a href="contact.html" data-nav="contact">Contact</a>
        </nav>

        <div class="header-actions">
          <button
            class="header-whatsapp"
            aria-label="Chat with LUMÉA on WhatsApp"
            data-whatsapp="Hello, I would like to enquire about LUMÉA Salon."
          >
            ◔
          </button>

          <a href="contact.html#appointment" class="header-book">Book Now</a>

          <button
            class="menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="siteNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  `;

  const header = headerTarget.querySelector(".site-header");
  const menuToggle = headerTarget.querySelector(".menu-toggle");
  const nav = headerTarget.querySelector(".site-nav");

  const currentPage = document.body.dataset.page;

  const activeLink = headerTarget.querySelector(`[data-nav="${currentPage}"]`);

  if (activeLink) {
    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "page");
  }

  function setMenu(open) {
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenu(!header.classList.contains("menu-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (
      header.classList.contains("menu-open") &&
      !header.contains(event.target)
    ) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 35);
  }, { passive: true });
}

function renderFooter() {
  const footerTarget = document.getElementById("site-footer");

  if (!footerTarget) return;

  footerTarget.innerHTML = `
    <footer class="site-footer">
      <div class="container">

        <div class="footer-grid">

          <div class="footer-brand">
            <a class="logo" href="index.html">
              <span class="logo-mark">L</span>
              <span class="logo-copy">
                <span class="logo-name">LUMÉA</span>
                <span class="logo-tagline">SALON · BEAUTY · GROOMING</span>
              </span>
            </a>

            <p>
              A warm, modern unisex salon for hair, beauty and grooming —
              serving men, women, boys and girls.
            </p>

            <div class="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Google Business">G</a>
            </div>
          </div>

          <div>
            <div class="footer-title">Explore</div>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="services.html">Services</a>
              <a href="products.html">Products</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>

          <div>
            <div class="footer-title">Popular Services</div>
            <div class="footer-links">
              <a href="services.html#haircut">Haircuts</a>
              <a href="services.html#hair-colour">Hair Colour</a>
              <a href="services.html#facial">Facials</a>
              <a href="services.html#nails">Nails</a>
              <a href="services.html#makeup">Makeup</a>
            </div>
          </div>

          <div>
            <div class="footer-title">Contact</div>
            <div class="footer-links">
              <a href="tel:+9191XXXXXXXX">${SALON.phone}</a>
              <a href="mailto:${SALON.email}">${SALON.email}</a>
              <a href="contact.html#appointment">Book Appointment</a>
              <button
                class="contact-link-button"
                style="color:rgba(255,255,255,.62);text-align:left;"
                data-whatsapp="Hello, I would like to contact LUMÉA Salon."
              >
                WhatsApp Us
              </button>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} LUMÉA Salon. All rights reserved.</span>
          <span>Designed for beautiful everyday moments.</span>
        </div>

      </div>
    </footer>
  `;
}

/*
|--------------------------------------------------------------------------
| WHATSAPP
|--------------------------------------------------------------------------
*/

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function setupWhatsAppButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-whatsapp]");

    if (!button) return;

    const message = button.dataset.whatsapp || "Hello, I would like to enquire about LUMÉA Salon.";

    openWhatsApp(message);
  });
}

/*
|--------------------------------------------------------------------------
| SCROLL REVEAL
|--------------------------------------------------------------------------
*/

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

/*
|--------------------------------------------------------------------------
| LIGHTBOX
|--------------------------------------------------------------------------
*/

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  const image = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".lightbox__close");

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    image.src = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach((item) => {
    item.addEventListener("click", () => {
      image.src = item.dataset.lightbox;
      image.alt = item.querySelector("img")?.alt || "Salon gallery image";

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}

/*
|--------------------------------------------------------------------------
| COUNTERS
|--------------------------------------------------------------------------
*/

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  if (!counters.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setFinalValue(counter) {
    const value = Number(counter.dataset.counter);
    const decimals = Number(counter.dataset.decimals || 0);
    const suffix = counter.dataset.suffix || "";

    counter.textContent = value.toFixed(decimals) + suffix;
  }

  if (reduceMotion) {
    counters.forEach(setFinalValue);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.counter);
        const decimals = Number(counter.dataset.decimals || 0);
        const suffix = counter.dataset.suffix || "";

        const duration = 1400;
        const startTime = performance.now();

        function update(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;

          counter.textContent = current.toFixed(decimals) + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observerInstance.unobserve(counter);
      });
    },
    { threshold: 0.7 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/*
|--------------------------------------------------------------------------
| SERVICE CATALOGUE
|--------------------------------------------------------------------------
*/

let selectedCustomerType = "all";
let selectedCategory = null;

function getCategoriesForType(type) {
  if (type === "all") {
    return allCategoryOrder.filter((category) => {
      return Object.values(services).some((genderData) => genderData[category]);
    });
  }

  return Object.keys(services[type] || {});
}

function getCategoryServices(type, category) {
  if (type !== "all") {
    return services[type]?.[category] || [];
  }

  const combined = [];
  const seen = new Set();

  Object.values(services).forEach((genderData) => {
    const categoryServices = genderData[category] || [];

    categoryServices.forEach((service) => {
      if (!seen.has(service[0])) {
        combined.push(service);
        seen.add(service[0]);
      }
    });
  });

  return combined;
}

function renderCategoryGrid() {
  const categoryGrid = document.getElementById("categoryGrid");

  if (!categoryGrid) return;

  const categories = getCategoriesForType(selectedCustomerType);

  categoryGrid.innerHTML = categories.map((category) => {
    const [label, icon, description] = categoryLabels[category] || [
      category,
      "◇",
      "Professional salon service."
    ];

    return `
      <button
        class="category-card ${selectedCategory === category ? "active" : ""}"
        data-category="${category}"
      >
        <span class="category-card__icon">${icon}</span>
        <strong>${label}</strong>
        <small>${description}</small>
      </button>
    `;
  }).join("");

  categoryGrid.querySelectorAll(".category-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;

      renderCategoryGrid();
      renderServiceCards();

      document.getElementById("serviceResults")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function getCustomerLabel(type) {
  const labels = {
    all: "All Services",
    men: "Men",
    women: "Women",
    boys: "Boys",
    girls: "Girls"
  };

  return labels[type] || type;
}

function renderServiceCards() {
  const cards = document.getElementById("serviceCards");
  const heading = document.getElementById("serviceHeading");
  const breadcrumb = document.getElementById("serviceBreadcrumb");

  if (!cards || !heading || !breadcrumb) return;

  if (!selectedCategory) {
    heading.textContent = "Choose a category";

    breadcrumb.innerHTML = `
      Services <span>›</span> ${getCustomerLabel(selectedCustomerType)}
    `;

    cards.innerHTML = `
      <div class="service-card" style="grid-column:1/-1;text-align:center;">
        <h3>Select a category above</h3>
        <p style="margin-bottom:0;">
          Choose a category to discover individual services and styles.
        </p>
      </div>
    `;

    return;
  }

  const categoryLabel = categoryLabels[selectedCategory]?.[0] || selectedCategory;
  const categoryServices = getCategoryServices(selectedCustomerType, selectedCategory);

  heading.textContent = categoryLabel;

  breadcrumb.innerHTML = `
    Services
    <span>›</span>
    ${getCustomerLabel(selectedCustomerType)}
    <span>›</span>
    ${categoryLabel}
  `;

  if (!categoryServices.length) {
    cards.innerHTML = `
      <div class="service-card" style="grid-column:1/-1;">
        <h3>Coming soon</h3>
        <p>We're preparing this service category for you.</p>
      </div>
    `;

    return;
  }

  cards.innerHTML = categoryServices.map((service, index) => {
    const [name, description, price, duration] = service;

    return `
      <article class="service-card">
        <div class="service-card__top">
          <h3>${name}</h3>
          <span class="service-card__number">${String(index + 1).padStart(2, "0")}</span>
        </div>

        <p>${description}</p>

        <div class="service-meta">
          <span class="service-price">${price}</span>
          <span>•</span>
          <span>${duration}</span>
        </div>

        <div class="service-card__actions">
          <a
            class="btn btn--dark"
            href="contact.html#appointment"
            data-service-book="${name}"
          >
            Book Now
          </a>

          <button
            class="whatsapp-btn"
            data-whatsapp="Hello, I would like to book ${name} at LUMÉA Salon. Please let me know the available appointment times."
          >
            WhatsApp
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function setupServicesCatalogue() {
  const customerChips = document.getElementById("customerChips");

  if (!customerChips) return;

  customerChips.querySelectorAll(".customer-chip").forEach((button) => {
    button.addEventListener("click", () => {
      customerChips.querySelectorAll(".customer-chip").forEach((chip) => {
        chip.classList.remove("active");
      });

      button.classList.add("active");

      selectedCustomerType = button.dataset.type;
      selectedCategory = null;

      renderCategoryGrid();
      renderServiceCards();
    });
  });

  const backButton = document.getElementById("backToCategories");

  if (backButton) {
    backButton.addEventListener("click", () => {
      document.getElementById("categoryGrid")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }

  const params = new URLSearchParams(window.location.search);
  const typeFromUrl = params.get("type");

  if (typeFromUrl && services[typeFromUrl]) {
    selectedCustomerType = typeFromUrl;

    customerChips.querySelectorAll(".customer-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.type === typeFromUrl);
    });
  }

  const hash = window.location.hash.replace("#", "");

  if (hash && categoryLabels[hash]) {
    selectedCategory = hash;
  }

  renderCategoryGrid();
  renderServiceCards();

  document.addEventListener("click", (event) => {
    const bookingLink = event.target.closest("[data-service-book]");

    if (!bookingLink) return;

    const serviceName = bookingLink.dataset.serviceBook;

    sessionStorage.setItem("selectedSalonService", serviceName);
  });
}

/*
|--------------------------------------------------------------------------
| PRODUCTS
|--------------------------------------------------------------------------
*/

function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  const visibleProducts = filter === "all"
    ? products
    : products.filter((product) => product.category === filter);

  grid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card reveal visible">

      <div class="product-card__image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>

      <div class="product-card__body">
        <span class="product-card__category">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="product-card__bottom">
          <span class="product-price">${product.price}</span>

          <button
            class="whatsapp-btn"
            data-whatsapp="Hello, I would like to enquire about the ${product.name}. Please let me know availability."
          >
            Enquire
          </button>
        </div>
      </div>

    </article>
  `).join("");
}

function setupProducts() {
  const filters = document.querySelectorAll(".product-filter");

  if (!filters.length) return;

  renderProducts();

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((button) => button.classList.remove("active"));
      filter.classList.add("active");

      renderProducts(filter.dataset.filter);
    });
  });
}

/*
|--------------------------------------------------------------------------
| APPOINTMENT FORM
|--------------------------------------------------------------------------
*/

function setupAppointmentForm() {
  const form = document.getElementById("appointmentForm");

  if (!form) return;

  const dateInput = document.getElementById("date");
  const messageElement = document.getElementById("formMessage");
  const serviceInput = document.getElementById("service");

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");

  const todayString = `${yyyy}-${mm}-${dd}`;

  dateInput.min = todayString;

  const savedService = sessionStorage.getItem("selectedSalonService");

  if (savedService) {
    const option = Array.from(serviceInput.options).find(
      (item) => item.textContent.toLowerCase() === savedService.toLowerCase()
    );

    if (option) {
      serviceInput.value = option.value;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    messageElement.textContent = "";

    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const phonePattern = /^[0-9+\-\s()]{10,15}$/;

    if (!name || !phone || !service || !date || !time) {
      messageElement.textContent = "Please complete all required fields.";
      return;
    }

    if (!phonePattern.test(phone)) {
      messageElement.textContent = "Please enter a valid phone number.";
      return;
    }

    if (date < todayString) {
      messageElement.textContent = "Please select today or a future date.";
      return;
    }

    const formattedDate = new Date(`${date}T${time}`).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString(
      "en-IN",
      {
        hour: "numeric",
        minute: "2-digit"
      }
    );

    const whatsappMessage = [
      "Hello, I would like to book an appointment at LUMÉA Salon.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Preferred Date: ${formattedDate}`,
      `Preferred Time: ${formattedTime}`,
      `Message: ${message || "No additional message."}`,
      "",
      "Please confirm availability. Thank you!"
    ].join("\n");

    openWhatsApp(whatsappMessage);

    messageElement.style.color = "#668d57";
    messageElement.textContent = "Your WhatsApp booking message is ready.";

    sessionStorage.removeItem("selectedSalonService");
  });
}

/*
|--------------------------------------------------------------------------
| SEO JSON-LD
|--------------------------------------------------------------------------
*/

function addStructuredData() {
  const existing = document.getElementById("salon-schema");

  if (existing) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": SALON.name,
    "description": "Premium unisex salon offering hair, beauty and grooming services for men, women and children.",
    "telephone": SALON.phone,
    "email": SALON.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Your Main Road",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "openingHours": [
      "Mo-Fr 10:00-20:00",
      "Sa 10:00-21:00",
      "Su 11:00-19:00"
    ]
  };

  const script = document.createElement("script");
  script.id = "salon-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);
}

/*
|--------------------------------------------------------------------------
| INITIALIZE
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();

  setupWhatsAppButtons();
  setupRevealAnimations();
  setupLightbox();
  setupCounters();
  setupServicesCatalogue();
  setupProducts();
  setupAppointmentForm();
  addStructuredData();
});