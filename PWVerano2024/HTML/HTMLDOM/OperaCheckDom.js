document.querySelector("#Operar").addEventListener('click', () => {
    const valor1 = Number(document.querySelector("#valor1").value);
    const valor2 = Number(document.querySelector("#valor2").value);
    let resultado1 = 0;
    let resultado2 = 0;
    let resultado3 = 0;
    let resultado4 = 0;

    if (document.querySelector("#suma").checked) {
        resultado1 = valor1 + valor2;
    }
    if (document.querySelector("#resta").checked) {
        resultado2 = valor1 - valor2;
    }
    if (document.querySelector("#multiplicar").checked) {
        resultado3 = valor1 * valor2;
    }
    if (document.querySelector("#dividir").checked) { 
        resultado4 = valor1 / valor2;
    }

    document.querySelector("#resultado").textContent =
     `Suma: ${resultado1}\nResta: ${resultado2}\nMultiplicación: ${resultado3}\nDivisión: ${resultado4}`;
});
