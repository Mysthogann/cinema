function ticket(no_asiento, id_usuario, reservado) {
   this.no_asiento = no_asiento;
   this.id_usuario = id_usuario;
   this.reservado = reservado;
}

const seatsContainer = document.querySelector('.seatsContainer');
const seat = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('.count');
const total = document.getElementById('.total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

console.log(typeof ticketPrice);

seatsContainer.addEventListener('click')