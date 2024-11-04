const buttonMas = document.getElementById('button+');
const buttonMenos = document.getElementById('button-');
const buttonMulti = document.getElementById('buttonX');
const buttonDivid = document.getElementById('button/');
const buttonBorrar = document.getElementById('buttonBorrar');

const buttonIgual = document.getElementById('button=');
const buttonAC = document.getElementById('buttonAC');
const buttonPunto = document.getElementById('buttonPunto');

let pantallaH3 = document.getElementById('pantallaH3');
pantallaH3.innerText = '0';

let pantallaH4 = document.getElementById('pantallaH4');

let operacion = '';
let resultadoPrevio = 0;

let userNumber1 = Number(0);
let userNumber2 = Number(0);
let userNumberInput = 1;

let fontSize = 55;

function ajustarFuente() {
    if (pantallaH3.scrollWidth < 280) {
        fontSize = 55;
        pantallaH3.style.fontSize = `${fontSize}px`
    } else {
        while(pantallaH3.scrollWidth > 280) {
            fontSize --;
            pantallaH3.style.fontSize = `${fontSize}px`
        }
    }
}



function operacionPendiente() {
    switch (operacion) {
        case 'mas':
            userNumber1 = userNumber1 + userNumber2;
            break;
        case 'menos':
            userNumber1 = userNumber1 - userNumber2;
            
            break;
        case 'multi':
            userNumber1 = userNumber1 * userNumber2;
            
            break;
        case 'divid':
            userNumber1 = userNumber1 / userNumber2;
            
            break;
    
        default:
            break;
    }
    userNumber2 = 0;
}

function operaciones(op) {
    if (pantallaH3.innerText === '' || pantallaH3.innerText === '0') {
        if (op === 'menos') {
            pantallaH3.innerText = '-';
        }else{
            return;
        }
    } else {
        if (operacion) operacionPendiente();
        operacion = op;
        userNumberInput = 2;
        pantallaH4.innerText = `${userNumber1} ${op === 'mas' ? '+' : op === 'menos' ? '-' : op === 'multi' ? 'x' : '/'} `;
        pantallaH3.innerText = '';
    }
}

function agregarPunto() {
    if (pantallaH3.innerText.includes('.')) {
        return;
    } else {
        pantallaH3.innerText += '.';
    }
}

function agregarNumero(num) {
    if (pantallaH3.innerText === '0') pantallaH3.innerText = ''; 
    pantallaH3.innerText += num;
    
    if (userNumberInput === 1) {
        userNumber1 = Number(pantallaH3.innerText);
    } else {
        userNumber2 = Number(pantallaH3.innerText);
    }
    ajustarFuente();
}


buttonMas.onclick = () => operaciones('mas');
buttonMenos.onclick = () => operaciones('menos');
buttonMulti.onclick = () => operaciones('multi');
buttonDivid.onclick = () => operaciones('divid');


buttonIgual.onclick = () => {
    operacionPendiente();
    pantallaH3.innerText = userNumber1;
    operacion = '';
    pantallaH4.innerText = '';
    ajustarFuente();
}

buttonAC.onclick = () => {
    pantallaH3.innerHTML = '0';
    userNumber1 = 0;
    userNumber2 = 0;
    userNumberInput = 1;
    pantallaH4.innerText = '';
    operacion = '';
    ajustarFuente();
}
