
// Funcion tradicional

function sumar( a,b=10 ){


    return a + b;
}

console.log( sumar(5) );


// Funcion de Flecha

const sumar2 = ( c , d ) => {
    return c + d ;
}

console.log( sumar2(6, 3) );


// funcion reducida
const sumar4 = ( c , d ) => c + d ;


console.log( sumar4(6, 3) );

// Funcion sin argumentos

const saludar = () => 'Hola mundo!!';

console.log( saludar() )
