const ejercicio1 = document.getElementById("ejercicio1");

//Ejercicio1
function mostrarMensaje(callback) {
  console.warn("Este mensaje es un console.warn");
  if (typeof callback === "function") {
    callback();
  }
}

function miCallback() {
  console.log("Este callback se está ejecutando");
}

document.getElementById("ejercicio1").addEventListener("click", function () {
  mostrarMensaje(miCallback);
});

//Ejercicio2
function mostrarResultado(numero, callback) {
  const tipo = typeof numero;

  callback(tipo, numero);
}

function miCall(tipo, contenido) {
  console.log(`Tipo de datos: ${tipo}`);
  console.log(`Contenido: ${contenido}`);
}

document.getElementById("ejercicio2").addEventListener("click", function () {
  mostrarResultado(10, miCall);
});

//Ejercicio3
function suma(numero1, numero2, llamarCallback) {
  let suma = numero1 + numero2;
  llamarCallback(suma);
}

function myCall(suma) {
  console.log(`Resultado de la suma es: ${suma}`);
}

document.getElementById("ejercicio3").addEventListener("click", function () {
  suma(5, 3, myCall);
});

//Ejercicio4
function mayusculaAMinuscula(string, callback2) {
  let palabra = string;
  if (palabra === palabra.toLowerCase()) {
    palabra = string.toUpperCase();
  } else {
    palabra = string.toLowerCase();
  }

  callback2(palabra); // Llama al callback con el resultado
}

function devolucion(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

document.getElementById("ejercicio4").addEventListener("click", function () {
  mayusculaAMinuscula("papa te amo", devolucion);
});

//Ejercicio5
// let conversion = [2,1.5,3.3,1];
function cantidadesTiempo(tiempoArray, callback3) {
  const cantidadesMayoresA2Horas = tiempoArray.filter((tiempo) => tiempo > 120);
  callback3(cantidadesMayoresA2Horas);
}

function horas(arrayFiltrado) {
  console.log("Cantidades mayores a 2 horas:", arrayFiltrado);
}

document.getElementById("ejercicio5").addEventListener("click", function () {
  const tiempos = [120, 80, 200, 100];
  cantidadesTiempo(tiempos, horas);
});
