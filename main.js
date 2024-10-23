const buttonMas = document.getElementById('button+');
const buttonMenos = document.getElementById('button-');
const buttonIgual = document.getElementById('button=');
const buttonAC = document.getElementById('buttonAC');

let pantallaH3 = document.getElementById('pantallaH3');
pantallaH3.innerText = '0';

let arrayNumeros = [];
let arrayPosition = 0;
let operacion = '';
let resultadoPrevio = 0;
let guia = 1;



function agregarNumero(numero) {
    switch (guia) {
        case 1:
            pantallaH3.innerText += numero;
            arrayNumeros[arrayPosition] = Number(pantallaH3.innerText);
            console.log("Numero "+ arrayPosition + ": " + arrayNumeros[arrayPosition]);
            guia = 1;
            break;
        case 2:
            pantallaH3.innerText = '';
            pantallaH3.innerText += numero;
            arrayNumeros[arrayPosition] = Number(pantallaH3.innerText);
            console.log("Numero "+ arrayPosition + ":" + arrayNumeros[arrayPosition]);
            guia = 1;
            break;
    
        default:
            break;
    }
}

function generarOperacion(op) {
    switch (op) {
        case '+':
            resultadoPrevio = arrayNumeros.reduce((acum, valorActual) => acum + valorActual, 0);
            arrayNumeros.fill(0);
            arrayNumeros[0] = resultadoPrevio;
            resultadoPrevio = 0;
            guia = 2;
            break;

        case '-':
            resultadoPrevio = arrayNumeros.reduce((acum, valorActual) => acum - valorActual, 0);
            arrayNumeros.fill(0);
            arrayNumeros[0] = resultadoPrevio;
            resultadoPrevio = 0;
            guia = 2;
            break;

        case '*':
            resultadoPrevio = arrayNumeros.reduce((acum, valorActual) => acum * valorActual, 0);
            arrayNumeros.fill(0);
            arrayNumeros[0] = resultadoPrevio;
            resultadoPrevio = 0;
            guia = 2;
            break;

        case '/':
            resultadoPrevio = arrayNumeros.reduce((acum, valorActual) => acum / valorActual, 0);
            arrayNumeros.fill(0);
            arrayNumeros[0] = resultadoPrevio;
            resultadoPrevio = 0;
            guia = 2;
            break;
        
        
        default:
            break;
    }
}

buttonMas.onclick = () => {
    arrayPosition += 1;
    operacion = '+';
    buttonIgual.click();
    console.log("Posicion en el arreglo: " + arrayPosition);
}

buttonMenos.onclick = () => {
    arrayPosition += 1;
    operacion = '-';
    buttonIgual.click();
    console.log("Posicion en el arreglo: " + arrayPosition);
}

buttonIgual.onclick = () => {
    generarOperacion(operacion);
    pantallaH3.innerText = arrayNumeros[0];
}

buttonAC.onclick = () => {
    console.clear();
    arrayNumeros.fill(0);
    pantallaH3.innerText = '0';
    arrayPosition = 1;
}