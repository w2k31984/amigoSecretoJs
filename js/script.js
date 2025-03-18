let nombres = [];

function agregarNombre() {
  const nombreInput = document.getElementById("nombre");
  const nombre = nombreInput.value.trim();
  if (nombre && !nombres.includes(nombre)) {
    nombres.push(nombre);
    actualizarLista();
    nombreInput.value = "";
  }
}

function actualizarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";
  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigoSecreto() {
  if (nombres.length < 2) {
    alert("Agrega al menos dos participantes.");
    return;
  }

  let nombresMezclados = [...nombres];
  do {
    nombresMezclados.sort(() => Math.random() - 0.5);
  } while (tieneAsignacionesInvalidas(nombres, nombresMezclados));

  let resultadoHTML = "<h2>Resultados:</h2><ul>";
  for (let i = 0; i < nombres.length; i++) {
    resultadoHTML += `<li>${nombres[i]} → ${nombresMezclados[i]}</li>`;
  }
  resultadoHTML += "</ul>";
  document.getElementById("resultado").innerHTML = resultadoHTML;
}

function tieneAsignacionesInvalidas(original, mezclado) {
  for (let i = 0; i < original.length; i++) {
    if (original[i] === mezclado[i]) {
      return true;
    }
  }
  return false;
}
