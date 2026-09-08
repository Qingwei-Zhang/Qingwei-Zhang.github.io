const btn = document.getElementById("langToggle");
const menuBtn = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
let lang = "en";

function setLang(next) {
  lang = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-en][data-zh]").forEach((el) => {
    el.textContent = el.dataset[next];
  });
  btn.textContent = next === "en" ? "中文" : "EN";
}

btn.addEventListener("click", () => setLang(lang === "en" ? "zh" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
