const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("menu");

if (burgerBtn && menu) {
  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* OFFER TIMER CONTROL */
const offerEnabled = true; // change to false if you want to hide the offer section
const promoEnd = new Date("2026-04-01T23:59:59");

function tick() {
  const offers = document.getElementById("offers");
  if (!offers) return;

  const now = new Date();
  const distance = promoEnd - now;

  if (distance <= 0) {
    offers.style.opacity = "0";
    setTimeout(() => {
      offers.style.display = "none";
    }, 500);
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  if (dd) dd.textContent = pad(days);
  if (hh) hh.textContent = pad(hours);
  if (mm) mm.textContent = pad(mins);
  if (ss) ss.textContent = pad(secs);
}

const offers = document.getElementById("offers");
if (offers) {
  if (!offerEnabled) {
    offers.style.display = "none";
  } else {
    tick();
    setInterval(tick, 1000);
  }
}