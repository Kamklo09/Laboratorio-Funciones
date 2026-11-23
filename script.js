// Variables para TODOS los elementos del html que se van a modificar
const btnGenerar = document.querySelector("#btnGenerar");

let valorM = document.querySelector("#valorM");
let valorN = document.querySelector("#valorN");
let funcionGenerada = document.querySelector("#funcionGenerada");
let clasificacion = document.querySelector("#clasificacion");

let cajaLineal = document.querySelector("#cajaLineal");
let cajaAfin = document.querySelector("#cajaAfin");
let cajaConstante = document.querySelector("#cajaConstante");
let cajaSinFuncion = document.querySelector("#cajaSinFuncion");

let pendienteLineal = document.querySelector("#pendienteLineal");
let pendienteAfin = document.querySelector("#pendienteAfin");
let corteEjeY = document.querySelector("#corteEjeY");
let corteEjeYConstante = document.querySelector("#corteEjeYConstante");
let funcionBase = document.querySelector("#funcionBase");
let unidadesTraslacion = document.querySelector("#unidadesTraslacion");

// Grafico de GeoGebra (IA)
let parametrosGeoGebra = {
    "appName": "graphing",
    "width": 550,
    "height": 360,
    "showToolBar": false,
    "showAlgebraInput": true,
    "showMenuBar": false
};

let appletGeoGebra = new GGBApplet(parametrosGeoGebra, true);

window.addEventListener("load", function () {
    appletGeoGebra.inject("ggb-element");
});

// Genera funcion al azar y la clasifica
btnGenerar.addEventListener("click", function () {
    let m = Math.floor(Math.random() * 7) - 3;// Genera un número aleatorio entre -3 y 3 para la pendiente
    let n = Math.floor(Math.random() * 7) - 3;// Math random genera un numero decimal entre 0 y 1, se multiplica por 7 para que el rango sea de 0 a 6, y luego se le resta 3 para que el rango final sea de -3 a 3.

    ggbApplet.evalCommand("f(x) = (" + m + ")*x + (" + n + ")");// Define la función en GeoGebra con los valores generados de m y n

    let textoPendiente = "Función constante.";
    if (m > 0) {
        textoPendiente = "Función creciente.";
    } else if (m < 0) {
        textoPendiente = "Función decreciente.";
    }

    let textoBase = "f(x) = " + m + "x";
    let textoFuncion = textoBase;

    if (m === 0) {
        textoFuncion = "f(x) = " + n;
    } else if (n > 0) {
        textoFuncion = textoBase + " + " + n;
    } else if (n < 0) {
        textoFuncion = textoBase + " - " + (-n);
    }

    valorM.innerText = m;
    valorN.innerText = n;
    funcionGenerada.innerText = "Función generada: " + textoFuncion;

    pendienteLineal.innerText = textoPendiente;
    pendienteAfin.innerText = textoPendiente;
    corteEjeY.innerText = n;
    corteEjeYConstante.innerText = n;
    funcionBase.innerText = textoBase;
    unidadesTraslacion.innerText = n;

    // Limpiar ficha activa anterior
    cajaLineal.classList.remove("activa");
    cajaAfin.classList.remove("activa");
    cajaConstante.classList.remove("activa");
    cajaSinFuncion.classList.remove("activa");

    if (m === 0 && n === 0) {
        clasificacion.innerText = "Clasificación: FUNCIÓN NULA / SIN FUNCIÓN (m = 0 y n = 0)";
        cajaSinFuncion.classList.add("activa");
    } else if (m === 0 && n !== 0) {
        clasificacion.innerText = "Clasificación: FUNCIÓN CONSTANTE (F.C.), porque m = 0 y n ≠ 0";
        cajaConstante.classList.add("activa");
    } else if (n === 0) {
        clasificacion.innerText = "Clasificación: FUNCIÓN LINEAL (F.L.), porque m ≠ 0 y n = 0";
        cajaLineal.classList.add("activa");
    } else {
        clasificacion.innerText = "Clasificación: FUNCIÓN AFÍN (F.A.), porque m ≠ 0 y n ≠ 0";
        cajaAfin.classList.add("activa");
    }
});