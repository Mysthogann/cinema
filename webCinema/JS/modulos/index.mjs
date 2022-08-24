import peliculas from '../peliculas.mjs'; // Peliculas va a ser el objeto de peliculas para ver todo lo que contiene

document.getElementById("db").innerHTML = peliculas.dragonBall.nombre;
document.getElementById("ant").innerHTML = peliculas.antMan.nombre;
document.getElementById("thor").innerHTML = peliculas.thor.nombre;
document.getElementById("tb").innerHTML = peliculas.trenBala.nombre;