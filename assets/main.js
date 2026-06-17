// Замени ссылки на свои — Kwork-профиль и Telegram
const LINKS = {
  kwork: "https://kwork.ru/",
  telegram: "https://t.me/",
};

const phrases = [
  "python bot.py",
  "pip install aiogram",
  "новая заявка → админу ✓",
  "broadcast отправлено: 42",
  "git push origin main",
];

function applyLinks() {
  const ids = ["nav-kwork", "hero-kwork", "cta-kwork"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = LINKS.kwork;
  });

  const tgIds = ["hero-telegram", "cta-telegram"];
  tgIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = LINKS.telegram;
  });

  document.querySelectorAll(".order-link").forEach((el) => {
    el.href = LINKS.kwork;
  });
}

function typewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, charIdx + 1);
      charIdx += 1;
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx -= 1;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }

  tick();
}

function revealOnScroll() {
  const blocks = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  blocks.forEach((b) => obs.observe(b));
}

function mobileMenu() {
  const btn = document.getElementById("menu-btn");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

applyLinks();
typewriter();
revealOnScroll();
mobileMenu();

// hero виден сразу
const hero = document.querySelector(".hero");
if (hero) hero.classList.add("visible");
