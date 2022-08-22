let boolSalida = false;
var numSalida = 57;

function sleep(ms) {
  // Metodo await
  return new Promise((finalizado) => setTimeout(finalizado, ms));
}

const prompt = require("prompt-sync")();

function Pregunta() {
  let numSalida = prompt("Digite el numero correcto entre 1 al 100");

  if (numSalida == 57) {
    console.log(`${numSalida} Es el numero correto`);

  } else if (numSalida != 57) {
    console.log(`Hey there ${numSalida}`);

  }
}

Pregunta();