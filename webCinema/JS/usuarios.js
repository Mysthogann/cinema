import peliculas from './peliculas.mjs'; // Peliculas va a ser el objeto de peliculas para ver todo lo que contiene

const usuario1 = {
   id : 'usuario1',
   pass: 'usu1',
   reservas : [ // Esto tendra todas las reservas del usuario
     peliculas.dragonBall.asientosT1[0]
   ]
}

const usuario2 = {
   id : 'usuario2',
   pass: 'usu2',
   reservas : [

   ]
}

// Esto realiza el export, el default es necesario para que no dé errores
export default {usuario1, usuario2}
