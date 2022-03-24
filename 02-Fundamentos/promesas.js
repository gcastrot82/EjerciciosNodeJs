
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

id = 2


// Forma 1
// getEmpleado(id)
// .then(empleado=> console.log(empleado))
// .catch(err => console.log(err));


// getSalario(id)
// .then(salario=>console.log(salario))
// .catch(err => console.log(err));

// forma 2 - Promesas en Cadena

getEmpleado(id)
.then(empleado =>getSalario(id)

)
.then()
