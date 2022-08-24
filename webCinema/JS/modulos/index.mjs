import pel from '../peliculas.js';
const {dragonBall, antMan, thor, trenBala} = pel;

document.getElementById("db").innerHTML = pel.dragonBall[1];
document.getElementById("ant").innerHTML = pel.antMan[1];
document.getElementById("thor").innerHTML = pel.thor[1];
document.getElementById("tb").innerHTML = pel.trenBala[1];

//console.log(pel.dragonBall)