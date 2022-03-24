
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




// const getEmpleado = ( id ) => {
//     const empleado = empleados.find((e) => {
//         return e.id === id;
//     })
// }

// funcion reducida
const getEmpleado = ( id ,callback) => {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado){
        callback(null, empleado );
    } else {
        callback(`El empleado con id ${id} no existe`);
    }

    
}

getEmpleado(2, (err, empleado) => {
    
    if(err){
        return console.log(err);
    }else{
        return console.log(empleado);
    }   
    
});


const getSalario = ( id , callback ) => {

    
    //const sala = salarios.find((s) => s.id === id).salario;

    // Valida si existe el salario
    //const sala = salarios.find((s) => s.id === id)?.salario;
    const sala = salarios.find((s) => s.id === id);
    if(sala){
        callback(null,sala.salario);
    }else{
        console.log('El salario no existe');
    }
    

}

getSalario(3, (err, salario)=>{

    if(err){
        return console.log(err);        
    }
    else{
        return console.log(salario);
    }

});