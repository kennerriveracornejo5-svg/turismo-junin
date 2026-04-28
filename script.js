let frases = [
  "DELIVERY <span class='resaltado'>GRATIS</span> POR COMPRAS MAYORES A S/159",
  "OBTÉN <span class='resaltado'>15% DSCTO</span> EN TU PRIMERA COMPRA",
];

let index = 0;
let elemento = document.getElementById("frase");

elemento.innerHTML = frases[index];

setInterval(() => {
  elemento.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % frases.length;
    elemento.innerHTML = frases[index];
    elemento.style.opacity = 1;
  }, 300);
}, 4000);

// 🍔 MENÚ
let btn = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// cerrar tocando fondo
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// 🔥 SCROLL
let lastScroll = 0;
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
