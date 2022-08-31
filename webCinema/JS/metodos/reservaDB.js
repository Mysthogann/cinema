const container = document.querySelector('.seatsContainer');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = 8; // Precio de los asientos
var seleccionados = []; // Array para los asientos seleccionados
var precio; // Valor que devuelve el precio total
var seatsIndex; // Para ver el index de los asientos

// Para ver la informacion de los asientos ocupados
var occupiedSeats = document.querySelectorAll('.row .seat.occupied')
var occupiedSeatsIndex = [...occupiedSeats].map(function(seat) {
  return [...seats].indexOf(seat);
}) 
console.log(occupiedSeatsIndex); 

// Actualiza el pago total y la cantidad se asientos
function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll('.row .seat.selected');

  seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  })

  seleccionados = seatsIndex;
  
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  precio = total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
  }
  
  updateSelectedCount();
  console.log(this.precio)
  console.log('Asientos' + seleccionados);
});

// Agregar al array varios valores == > NO
function agregarVarios(arr, valor) {
  for (let i = 0; i < valor.length; i++) {
    arr.push(valor);
    i++;
  }
  console.log("\n Asientos actualmente reservados: " + valor);
};
