
/* Seleccionar elementos */
const botonGenerar = document.querySelector("#botonGenerar");

let valorB = document.querySelector("#valorB");
let valorC = document.querySelector("#valorC");
let funcionGenerada = document.querySelector("#funcionGenerada");
let clasificacion = document.querySelector("#clasificacion");

let cajaLineal = document.querySelector("#cajaLineal");
let cajaAfin = document.querySelector("#cajaAfin");

let mensajeLineal = document.querySelector("#mensajeLineal");
let listaLineal = document.querySelector("#listaLineal");
let mensajeAfin = document.querySelector("#mensajeAfin");
let listaAfin = document.querySelector("#listaAfin");

let pendienteLineal = document.querySelector("#pendienteLineal");
let pendienteAfin = document.querySelector("#pendienteAfin");
let corteEjeY = document.querySelector("#corteEjeY");
let funcionBase = document.querySelector("#funcionBase");
let unidadesTraslacion = document.querySelector("#unidadesTraslacion");


// Generar función al presionar el botón
botonGenerar.addEventListener("click", function () {

    // Generar números aleatorios
    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    // Determinar la pendiente
    let textoPendiente = "Función constante.";

    if (b > 0) {
        textoPendiente = "Función creciente.";
    } else if (b < 0) {
        textoPendiente = "Función decreciente.";
    }

    // Formar la función
    let textoBase = "f(x) = " + b + "x";
    let textoFuncion = textoBase;

    if (c > 0) {
        textoFuncion = textoBase + " + " + c;
    } else if (c < 0) {
        textoFuncion = textoBase + " - " + (-c);
    }

    // Mostrar resultados
    valorB.innerText = b;
    valorC.innerText = c;
    funcionGenerada.innerText = "Función generada: " + textoFuncion;

    pendienteLineal.innerText = textoPendiente;
    pendienteAfin.innerText = textoPendiente;
    corteEjeY.innerText = c;
    funcionBase.innerText = textoBase;
    unidadesTraslacion.innerText = c;

    // Clasificar función
    if (c === 0) {

        clasificacion.innerText = "Clasificación: FUNCIÓN LINEAL (F.L.), porque c = 0";

        cajaLineal.classList.add("caja-activa");
        cajaAfin.classList.remove("caja-activa");

        mensajeLineal.classList.add("oculto");
        listaLineal.classList.remove("oculto");

        mensajeAfin.classList.remove("oculto");
        listaAfin.classList.add("oculto");

    } else {

        clasificacion.innerText = "Clasificación: FUNCIÓN AFÍN (F.A.), porque c ≠ 0";

        cajaAfin.classList.add("caja-activa");
        cajaLineal.classList.remove("caja-activa");

        mensajeAfin.classList.add("oculto");
        listaAfin.classList.remove("oculto");

        mensajeLineal.classList.remove("oculto");
        listaLineal.classList.add("oculto");
    }

});
