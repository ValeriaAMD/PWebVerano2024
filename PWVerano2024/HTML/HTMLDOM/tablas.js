var numeroDeTablas = parseInt(prompt("¿Cuántas tablas quieres ver?"));

//para crear las tablas con su titulo
for (var tabla = 1; tabla <= numeroDeTablas; tabla++) {
  console.log(`Tabla ${tabla}:`);
  //para crear las filas de la tabla
  for (var fila = 1; fila <= 3; fila++) {
    var filaTexto = "";
    //para crear las columnas de la tabla
    for (var columna = 1; columna <= 3; columna++) {
        filaTexto += `${fila * columna}\t`; // el \t es para separar los numeros 
      }
    console.log(filaTexto);
  }
}
