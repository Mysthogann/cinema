import peliculas from "../peliculas.mjs";
import usuarios from "../usuarios.mjs";

console.log(
  "\n Asientos actualmente en reserva: " + usuarios.usuario1.reservas
); // Lo que tiene el usuario en reserva
console.log(
  "\n Todos los asientos disponibles: " + peliculas.dragonBall.asientosT1
); //Todos los asientos

let seleccionados = []; // Array para los asientos seleccionados

function actualizaArr(arr1, arr2) { 
  if (arr1.includes(arr2)) {
    eliminarUno(arr2, arr1)
  } 
}

// Agregar al array un solo valor
function agregarUno(arr, valor) {
  arr.push(valor);
  console.log("\n Asientos seleccionados: " + valor);
}

// Eliminar al array un solo valor
function eliminarUno(arr, valor) {
  return arr.filter(function (ele) {
    return ele != valor;
  });
}


let resultado = actualizaArr(usuarios.usuario1.reservas, peliculas.dragonBall.asientosT1)
console.log(resultado)

function campoSelect()
{
    document.getElementById('seat').setAttribute("class", ".seat.selected");
}









/*
// Agregar al array varios valores == > NO
function agregarVarios(arr, valor) {
  for (let i = 0; i < valor.length; i++) {
    arr.push(valor);
    i++;
  }
  console.log("\n Asientos actualmente reservados: " + valor);
}

// Eliminar del array varios valores == > NO
function eliminarVarios(arr, valor) {
  for (let i = 0; i < valor.length; i++) {
    arr.filter(function (ele) {
      res = ele != valor;
    });
    i++;
  }
  return res;
}
*/
