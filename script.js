const productos = [
  { nombre: "Nike Air Max", precio: 350, img: "img/z1.jpg" },
  { nombre: "Adidas Ultraboost", precio: 400, img: "img/z2.jpg" },
  { nombre: "Puma RS-X", precio: 300, img: "img/z3.jpg" },
  { nombre: "Jordan 1", precio: 500, img: "img/z4.jpg" },
];

let carrito = 0;
let productoActual = null;

const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach((p) => {
    contenedor.innerHTML += `
            <div class="card">
                <span class="badge">-20%</span>
                <img src="${p.img}">
                <div class="info">
                    <h3>${p.nombre}</h3>
                    <p>S/ ${p.precio}</p>
                    <button class="btn" onclick="verProducto('${p.nombre}',${p.precio},'${p.img}')">
                        Ver producto
                    </button>
                </div>
            </div>
        `;
  });
}

mostrarProductos(productos);

// BUSCADOR
document.getElementById("buscador").addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(texto),
  );
  mostrarProductos(filtrados);
});

// MODAL
function verProducto(nombre, precio, img) {
  productoActual = { nombre, precio, img };
  document.getElementById("modal").style.display = "block";
  document.getElementById("imgModal").src = img;
  document.getElementById("tituloModal").innerText = nombre;
  document.getElementById("precioModal").innerText = "S/ " + precio;
}

document.getElementById("cerrar").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

// CARRITO
function agregarCarrito() {
  carrito++;
  document.getElementById("contador").innerText = carrito;
  alert("Producto agregado");
}

let total = 0;

// cuando agregas productos
function agregarCarrito() {
  carrito++;
  total += productoActual.precio;
  document.getElementById("contador").innerText = carrito;
}

// abrir pago
document.getElementById("carrito").onclick = () => {
  if (carrito === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  document.getElementById("pagoModal").style.display = "block";
  document.getElementById("totalPago").innerText = "S/ " + total;
};

// cerrar
function cerrarPago() {
  document.getElementById("pagoModal").style.display = "none";
}

// confirmar pedido
function confirmarPedido() {
  const nombre = document.getElementById("nombreCliente").value;

  if (nombre === "") {
    alert("Ingresa tu nombre");
    return;
  }

  // MENSAJE
  let mensaje = `🛒 *NUEVO PEDIDO* %0A`;
  mensaje += `👤 Nombre: ${nombre} %0A`;
  mensaje += `🛍️ Productos: ${productoActual.nombre} %0A`;
  mensaje += `💰 Total: S/ ${total} %0A`;
  mensaje += `📱 Pago: Yape / Plin %0A`;
  mensaje += `📸 Enviaré comprobante por aquí`;

  // TU NÚMERO
  let telefono = "51946458737"; // ← CAMBIA ESTO

  // LINK WHATSAPP
  let url = `https://wa.me/${telefono}?text=${mensaje}`;

  // ABRIR WHATSAPP
  window.open(url, "_blank");

  cerrarPago();

  carrito = 0;
  total = 0;
  document.getElementById("contador").innerText = 0;
}
