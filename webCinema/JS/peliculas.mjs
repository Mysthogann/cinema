const dbSinop = 'El Ejército de la Cinta Roja fue una vez destruido por Goku. Las personas que continúan con su espíritu han creado los androides definitivos, Gamma 1 y Gamma 2. Estos dos androides se llaman a sí mismos “Superhéroes”. Comienzan a atacar a Piccolo y Gohan. ¿Cuál es el objetivo? Frente al peligro que se aproxima, es hora de despertar';

const antSinop = 'Scott Lang y Hope Van Dyne, junto con Hank Pym y Janet Van Dyne, exploran el Reino Cuántico, donde interactúan con extrañas criaturas y se embarcan en una aventura que va más allá de los límites de lo que creían posible';

const thorSinop = 'Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses';

const trenSinop = 'En un tren de alta velocidad que se dirige de Tokio a Morioka, cinco asesinos profesionales descubren que van tras el mismo objetivo.';

 const dragonBall = {
   id       :  1,
   nombre   :  'Dragon Ball: Super Hero',
   sinopsis :  dbSinop,
   duracion :  '1h 40m',
   asientosT1 :   [
      'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
      'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
      'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'
   ]
 }; 

 const antMan = { 
   id       :  2,
   nombre   :  'Ant-Man and the Wasp: Quantumania',
   sinopsis :  antSinop,
   duracion :  '2h 30m',
   asientos :  [
      'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
      'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
      'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'
   ]
}; 

 const thor = {
   id       :  3,
   nombre   :  'Thor: Love and Thunder',
   sinopsis :  thorSinop,
   duracion :  '1h 59m',
   asientos :  [
      'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
      'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
      'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'
   ]
 }; 

 const trenBala = {
   id       :  4,
   nombre   :  'Tren Bala',
   sinopsis :  trenSinop,
   duracion :  '2h 06m',
   asientos :  [
      'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
      'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
      'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'
   ]
}; 

// Esto realiza el export, el default es necesario para que no dé errores
export default {dragonBall, antMan, thor, trenBala}
