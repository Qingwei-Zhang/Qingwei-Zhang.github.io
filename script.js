const btn = document.getElementById("langToggle");
let lang = "en";
function setLang(next){
  lang = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-en][data-zh]").forEach(el=>{
    el.textContent = el.dataset[next];
  });
  btn.textContent = next === "en" ? "中文" : "EN";
}
btn.addEventListener("click", ()=>setLang(lang === "en" ? "zh" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("cvLink").addEventListener("click", (e)=>{
  e.preventDefault();
  alert(lang === "en" ? "Add your CV PDF to the repository and replace this link with the file path, e.g. cv.pdf." : "把你的简历 PDF 放到仓库中，并把此链接替换为文件路径，例如 cv.pdf。");
});