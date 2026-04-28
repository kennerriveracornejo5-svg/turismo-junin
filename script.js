function procesarDador() {
  let nombre = document.getElementById("nombre").value;
  let edad = parseInt(document.getElementById("edad").value);
  let nota = parseFloat(document.getElementById("nota").value);
  let turno = document.getElementById("turno").value;

  let resultado = document.getElementById("resultado");

  if (nombre === "" || isNaN(edad) || isNaN(nota)) {
    resultado.innerHTML = `
      <div class="card">
        <h3>Error</h3>
        <p>Completa todos los campos correctamente</p>
      </div>
    `;
    return;
  }

  let estado = "";

  if (nota >= 90) estado = "🏆 Premio mayor";
  else if (nota >= 80) estado = "🥈 Segundo lugar";
  else if (nota >= 50) estado = "🥉 Tercer lugar";
  else estado = "❌ Para otra oportunidad";

  resultado.innerHTML = `
    <div class="card">
      <h3>Resultado</h3>
      <p><span>Nombre:</span> ${nombre}</p>
      <p><span>Edad:</span> ${edad}</p>
      <p><span>Nota:</span> ${nota}</p>
      <p><span>Turno:</span> ${turno}</p>
      <p><span>Estado:</span> ${estado}</p>
    </div>
  `;
}
