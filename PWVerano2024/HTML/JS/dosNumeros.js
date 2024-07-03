
var numerosAsumar =prompt("¿Cuántos números quieres sumar?");
var suma = 0;

for(var i = 0; i < numerosAsumar; i++) {
  var numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  suma += numero;
}

alert(`El resultado de la suma es: ${suma}`);
