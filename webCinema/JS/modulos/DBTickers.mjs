import peliculas from '../peliculas.mjs'; // Peliculas va a ser el objeto de peliculas para ver todo lo que contiene

document.getElementById("peli").innerHTML = 'Pelicula: ' + peliculas.dragonBall.nombre;
document.getElementById("dbdesc").innerHTML = peliculas.dragonBall.sinopsis;
