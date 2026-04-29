// FRASES
let frases = [
  "DELIVERY <span class='resaltado'>GRATIS</span> POR COMPRAS MAYORES A S/159",
  "OBTÉN <span class='resaltado'>15% DSCTO</span> EN TU PRIMERA COMPRA",
];

let indexFrases = 0; // 🔥 cambiado
let elemento = document.getElementById("frase");

elemento.innerHTML = frases[indexFrases];

setInterval(() => {
  elemento.style.opacity = 0;

  setTimeout(() => {
    indexFrases = (indexFrases + 1) % frases.length;
    elemento.innerHTML = frases[indexFrases];
    elemento.style.opacity = 1;
  }, 300);
}, 4000);

// MENÚ
let btn = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// SCROLL (🔥 solo uno)
let lastScroll = 0;
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  header.classList.toggle("scrolled", currentScroll > 50);

  lastScroll = currentScroll;
});

// SLIDER
let slider = document.getElementById("slider");

if (slider) {
  // 🔥 evita errores si no existe
  let total = slider.children.length;
  let indexSlider = 0; // 🔥 cambiado
  let dotsContainer = document.getElementById("dots");

  // CREAR PUNTOS
  for (let i = 0; i < total; i++) {
    let dot = document.createElement("span");
    dot.onclick = () => irA(i);
    dotsContainer.appendChild(dot);
  }

  function actualizarDots() {
    let dots = dotsContainer.children;
    for (let d of dots) d.classList.remove("active");
    dots[indexSlider].classList.add("active");
  }

  function mover(direccion) {
    indexSlider += direccion;

    if (indexSlider < 0) indexSlider = total - 1;
    if (indexSlider >= total) indexSlider = 0;

    actualizarSlider();
  }

  function irA(i) {
    indexSlider = i;
    actualizarSlider();
  }

  function actualizarSlider() {
    slider.style.transform = `translateX(-${indexSlider * 100}%)`;
    actualizarDots();
  }

  setInterval(() => {
    mover(1);
  }, 4000);

  actualizarDots();
}
