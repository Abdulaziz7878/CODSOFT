const humburger = document.querySelector(".humburger");
const nav = document.querySelector(".nav-list");
const close = document.querySelector(".close");

humburger.addEventListener("click", () => {
  nav.classList.toggle("view");
  humburger.classList.toggle("view");
  close.classList.toggle("view");
});

close.addEventListener("click", () => {
  nav.classList.toggle("view");
  humburger.classList.toggle("view");
  close.classList.toggle("view");
});
