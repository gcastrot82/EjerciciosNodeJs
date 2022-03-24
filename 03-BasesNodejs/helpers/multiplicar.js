const fs = require('fs');

const crearArchivo = async(base) =>{
try{
    let salida = '';
    for(let i=1 ; i<=10 ; i++ ){
        salida += `${ base } x ${ i } = ${ base*i }\n`;
    }

    console.log(salida)

// Forma 1
// fs.writeFile(`tabla${base}.txt`,salida, (err)=>{
//     if (err) throw err;
//     console.log(`tabla${base}.txt creada`)
// })

// Forma 2
    fs.writeFileSync(`tabla${base}.txt`,salida);
    return `tabla${base}.txt creada`;
}catch(err){
    throw err
}

}


module.exports = {

    //crearArchivo: crearArchivo
    //Forma 2
    crearArchivo
}