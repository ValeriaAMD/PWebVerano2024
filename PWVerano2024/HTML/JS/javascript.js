'use strict'
for (var i = 100; i >= 0; i--) {
    console.log("numero: " + i);
}

// pruebas con let y var
//prueba con var
var numero = 40;
console.log(numero);

if (true){
    var numero=50;
    console.log(numero); // valor 50
}
console.log(numero);

var texto = 'Lenin es pro...fesor :(';
console.log(texto);

if(true){
    let texto='Probando let';
    console.log(texto);
}
console.log(texto)

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
alert("El resultafo de la operacion es: "+operacion)

//funcion para convertir str a int-float
var numero_falso = '5'
var nuevo = Number(numero_falso)
alert(typeof(nuevo))
var numero_entero = 5
alert(typeof(String(numero_entero)))

//bucle while
var years = 20;
do{
    console.log("Solo cuando sea diferente a 20");
    years++;
}while(years >= 25);
console.log(years);

years = 20
while(years<=25){
    console.log("Estoy en el bucle");
    years++;
}