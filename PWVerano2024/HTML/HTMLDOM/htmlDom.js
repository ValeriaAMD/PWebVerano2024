var filas = prompt('ingresa numero de filas')
var columnas = prompt('ingresa el numero de columnas')
let tabla1 = '<table id="tabla1">'
for(let fila=1;fila<=filas;fila++)  {
  tabla1 += '<tr>'
  for(let columna =1;columna<10;columna++) {
    tabla1 += <td>(${fila}-${columna})</td>
  }
  tabla1 += '</tr>'
}
tabla1 += '</table>'
alert(tabla1)
document.querySelector("#divtabla1").innerHTML=tabla1    
document.querySelector("#tabla1").style.border='1px solid #f00'
document.querySelector("#tabla1").style.borderCollapse='collapse'