const numeroDeTablas = parseInt(prompt("¿Cuántas tablas quieres ver?"));

for (let tabla = 1; tabla <= numeroDeTablas; tabla++) {
  const tablaElement = document.createElement("table");
  const titulo = document.createElement("h2");
  titulo.textContent = `Tabla ${tabla}`;
  tablaElement.appendChild(titulo);

  for (let fila = 1; fila <= 3; fila++) {
    const filaElement = document.createElement("tr");
    for (let columna = 1; columna <= 3; columna++) {
      const celdaElement = document.createElement("td");
      celdaElement.textContent = fila * columna;
      filaElement.appendChild(celdaElement);
    }
    tablaElement.appendChild(filaElement);
  }

  const lista1 = document.querySelector("#lista1");
  lista1.appendChild(tablaElement);
}
