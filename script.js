// Data
const packages = [
  { name: "Classic Wedding Design Package", price: 49, days: 3, tag: "Starter" },
  { name: "Signature Wedding Design Package", price: 76, days: 5, tag: "Popular" },
  { name: "Luxe Wedding Design Package", price: 107, days: 8, tag: "Premium" },
  { name: "Unscript Wedding Design Package", price: 85, days: 10, tag: "Custom" },
];

const services = [
  { tag: "Brand Strategy", title: "Corporate Branding", desc: "Organised and appealing User Interface designs you and your clients will love to see and experience.", img: "assets/service-branding.jpg", cta: "Get Started" },
  { tag: "Product UI", title: "Mobile App Interfaces", desc: "High-fidelity mobile UI designs that focus on usability and delight.", img: "assets/service-mobile.jpg", cta: "Contact Us" },
  { tag: "Graphic Designs", title: "Creatives & Flyers", desc: "Comprehensive identity systems to make your brand memorable and cohesive.", img: "assets/service-graphic.jpg", cta: "Explore Services" },
  { tag: "Web Development", title: "Business Online Presence", desc: "Custom, responsive websites and web applications designed to drive your business forward.", img: "assets/service-web.jpg", cta: "Explore Services" },
];

const stats = [
  { value: "10k+", label: "Creative Works Completed" },
  { value: "99%", label: "Client Satisfaction Rate" },
  { value: "8+", label: "Active Services Available" },
];

const testimonials = [
  { quote: "Our entire team loved the quality and professionalism of the work.", name: "Sarah Johnson", role: "Creative Director at Design Studio" },
  { quote: "Great prices and excellent service. They really understood our vision.", name: "James Brown", role: "Founder at Tech Startup" },
  { quote: "Excellent selection of services and very responsive to our needs.", name: "Emily Davis", role: "Marketing Manager at Brand Agency" },
];

const clients = ["RafRuf Promotion", "SamTrack", "Vita Verde", "BlueLeaf", "NorthPeak", "Lumen Co."];

const faqs = [
  { q: "How do I get started with mirage.tech?", a: "Simply browse our portfolio to see available services, or create an account to upload your own work. You can start hiring creative professionals within minutes." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers. All transactions are secure and encrypted for your protection." },
  { q: "Can I request custom services?", a: "Absolutely! Contact our support team to discuss your specific needs. We can help connect you with professionals who specialize in custom projects." },
  { q: "How long does delivery typically take?", a: "Delivery times vary based on the service complexity. Most services are completed within 3-7 days, though some premium services may take longer." },
  { q: "What if I'm not satisfied with the work?", a: "We offer a satisfaction guarantee. If you're not happy with the results, we'll work with the professional to make revisions or provide a full refund." },
  { q: "Is my data secure on mirage.tech?", a: "Yes, we use industry-standard security measures to protect your data. All information is encrypted and stored securely on our servers." },
];

const star = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const clock = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const arrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
const chev = `<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

// Render packages
document.getElementById("packagesGrid").innerHTML = packages.map(p => `
  <article class="pkg">
    <span class="tag">${p.tag}</span>
    <h3>${p.name}</h3>
    <div class="price">$${p.price}</div>
    <div class="delivery">${clock} ${p.days} days delivery</div>
    <button class="btn btn-ghost">Order Now</button>
  </article>`).join("");

// Render services
document.getElementById("servicesGrid").innerHTML = services.map(s => `
  <article class="service">
    <div class="body">
      <p class="tag">${s.tag}</p>
      <h3>${s.title}</h3>
      <p class="desc">${s.desc}</p>
      <div class="actions">
        <button class="btn btn-outline btn-sm">See Our Work</button>
        <button class="btn btn-hero btn-sm">${s.cta} ${arrow}</button>
      </div>
    </div>
    <div class="img"><img src="${s.img}" alt="${s.title}" loading="lazy" /></div>
  </article>`).join("");

// Render stats
document.getElementById("statsGrid").innerHTML = stats.map(s => `
  <div><div class="stat-value">${s.value}</div><p class="stat-label">${s.label}</p></div>`).join("");

// Render testimonials
document.getElementById("testimonialsGrid").innerHTML = testimonials.map(t => `
  <article class="testimonial">
    <div class="stars">${star.repeat(5)}</div>
    <p class="quote">"${t.quote}"</p>
    <div class="name">${t.name}</div>
    <div class="role">${t.role}</div>
  </article>`).join("");

// Render clients
document.getElementById("clientsGrid").innerHTML = clients.map(c => `<div>${c}</div>`).join("");

// Render FAQ accordion
const faqEl = document.getElementById("faqAccordion");
faqEl.innerHTML = faqs.map((f, i) => `
  <div class="accordion-item" data-i="${i}">
    <button class="accordion-trigger">${f.q} ${chev}</button>
    <div class="accordion-content"><div class="accordion-content-inner">${f.a}</div></div>
  </div>`).join("");

faqEl.querySelectorAll(".accordion-item").forEach(item => {
  const trigger = item.querySelector(".accordion-trigger");
  const content = item.querySelector(".accordion-content");
  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqEl.querySelectorAll(".accordion-item").forEach(other => {
      other.classList.remove("open");
      other.querySelector(".accordion-content").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("nav-mobile-open");
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
