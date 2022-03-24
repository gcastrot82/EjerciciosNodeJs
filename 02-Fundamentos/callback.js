

// setTimeout(arg1, arg2);

//Forma 1
setTimeout( function(){
    console.log('Hola mundo!!')
}, 1000);


setTimeout( () =>{
    return console.log('Hola mundo 2');
} , 1000);


setTimeout( () =>console.log('Hola mundo 3'), 1000);


// Parte Tradicional
const getUsuariobyId = (id) => {

    const usuario = {
        id,
        nombre: 'Gerardo Castro'
    }

    setTimeout(()=>{
        console.log(usuario)
    },2000)

}

getUsuariobyId(2020);


// Usando Callbacks

const getUsuarioById2 = (id, callback) => {

    const datos2 = {
        id,
        nombre: 'Emily Castro'
    };

    setTimeout(()=>{
        callback(datos2);
    },3000);

}

getUsuarioById2(6060, ( usuario )=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});