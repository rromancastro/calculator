const buttonMas = document.getElementById('button+');
const buttonMenos = document.getElementById('button-');
const buttonMulti = document.getElementById('buttonX');
const buttonDivid = document.getElementById('button/');


const buttonIgual = document.getElementById('button=');
const buttonAC = document.getElementById('buttonAC');

let pantallaH3 = document.getElementById('pantallaH3');
pantallaH3.innerText = '0';

let operacion = '';
let resultadoPrevio = 0;

let userNumber1 = Number(0);
let userNumber2 = Number(0);
let userNumberInput = 1;

function operaciones(op) {
    switch (op) {
        case 'mas':
            userNumber1 = userNumber1 + userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = '';
            userNumberInput = 2;
            operacion = 'mas';
            break;
        
        case 'menos':
            userNumber1 = userNumber1 - userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = '';
            userNumberInput = 2;
            operacion = 'menos';
            break;

        case 'multi':
            userNumber2 = 0;
            pantallaH3.innerText = '';
            userNumberInput = 2;
            operacion = 'multi';
            break;

        case 'divid':
            userNumber2 = 0;
            pantallaH3.innerText = '';
            userNumberInput = 2;
            operacion = 'divid';
            break;

        
        default:
            break;
    }
    console.log("resultado :" + userNumber1);
}

function agregarNumero(num) {
    switch (userNumberInput) {
        case 1:
            if (pantallaH3.innerText === '0') pantallaH3.innerText = '';
            pantallaH3.innerText += num;
            userNumber1 = Number(pantallaH3.innerHTML);
            userNumberInput = 1;

            console.log("El userNum1 ingresado es: " + userNumber1);
            break;

        case 2:
            if (pantallaH3.innerText === '0') pantallaH3.innerText = '';
            pantallaH3.innerText += num;
            userNumber2 = Number(pantallaH3.innerHTML);
            userNumberInput = 1;

            console.log("El userNum2 ingresado es: " + userNumber2);
            break;
            
    
        default:
            break;
    }
}


buttonMas.onclick = () => {
    operaciones(operacion);
    console.log("ultima operacion :" + operacion)
    operaciones('mas');
}
buttonMenos.onclick = () => {
    operaciones(operacion);
    console.log("ultima operacion :" + operacion)
    operaciones('menos');
}
buttonMulti.onclick = () => {
    operaciones(operacion);
    console.log("ultima operacion :" + operacion)
    operaciones('multi');
}
buttonDivid.onclick = () => {
    operaciones(operacion);
    console.log("ultima operacion :" + operacion)
    operaciones('divid');
}


buttonIgual.onclick = () => {
    switch (operacion) {
        case 'mas':
            userNumber1 = userNumber1 + userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = userNumber1;
            break;
        
        case 'menos':
            userNumber1 = userNumber1 - userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = userNumber1;
            break;

        case 'multi':
            userNumber1 = userNumber1 * userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = userNumber1;
            break;

        case 'divid':
            userNumber1 = userNumber1 / userNumber2;
            userNumber2 = 0;
            pantallaH3.innerText = userNumber1;
            break;
    
        default:
            break;
    }
}