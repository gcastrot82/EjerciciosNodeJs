

const jugador = {
    nombre: 'Goku',
    apellidos: 'Son',
    poder: 'Kamehameja',

    // getDatos: function(){
    getDatos (){
        return `${this.nombre} ${this.apellidos} ${this.poder}`
    }
}

// Usar desestrucración
const {nombre, apellidos, poder} = jugador;


console.log( jugador.getDatos());

console.log(nombre,apellidos,poder);


// Desectructurar en los argumentos
function imprimeJugador( {nombre,apellidos,poder,edad=0}){

    //const {nombre, apellidos, poder} = jugad;
    console.log(nombre,apellidos,poder,edad);

}

imprimeJugador( jugador );


// Desectructurar arrays
const heroes = ['Deadpool','Superman','Batman'];

//const h1 = heroes[0];

// Forma 2

//const [h1,h2,h3] = heroes
//console.log(h1,h2,h3)

const [,,h3] = heroes

console.log(h3)