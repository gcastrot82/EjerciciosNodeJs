
const empleados = [
    {
        id:1,
        nombre: 'Gerardo Castro'
    },
    {
        id:2,
        nombre: 'Emily Castro'
    },
    {
        id:3,
        nombre: 'Majo Castro'
    }
]

const salarios = [
    {
        id:1,
        salario: 15000
    },
    {
        id:2,
        salario: 19000
    }
]

const id = 10;

const getEmpleado = ( id ) => {

    return new Promise((resolve,reject)=>{
        const empleado = empleados.find((e)=> e.id === id)?.nombre;

        (empleado)
            ? resolve( empleado )
            : reject(`No existe empleado con id ${id}`);

    });

    

    // if (empleado){
    //     console.log('El empleado existe',empleado);
    // }else{
    //     console.log('El empleado no existe');
    // }
}


const getSalario = (id) => {

    return new Promise((resolve,reject)=>{
        const salario = salarios.find((s)=>s.id===id)?.salario;

        (salario)
            ? resolve (salario)
            : reject(`No existe salario con id ${id}`);
    });

}

// Retorna una promesa
const getInfoUsuario = async(id) =>{
    

    try{
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `Elsalario del empleado: ${empleado} es de ${salario}`;
    }catch(error){
        throw error
    }

}

getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch(err => {
        console.log('Todo MAL');
        console.log(err)
    })

// async await : tiene relacion con las promesas

// await debe estar dentro de una funcion





