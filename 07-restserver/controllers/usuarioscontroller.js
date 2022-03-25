
const { response, request } = require('express');

const usuariosGet = (req=request,res= response)=>{

    //const query_params = req.query;

    const {q,nombre='No name',apikey} = req.query;

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey
    });
};

const usuariosPost = (req,res=response)=>{
    //res.status(201).json({

    // Los datos que se mandan en la peticion esta en la request
    //const body = req.body;

    // Desestructuración
    const { nombre,edad,apellido } = req.body;

    console.log(nombre);

    res.json({
        msg:'post API - controller',
        //body
        nombre,
        edad,
        apellido
    });
};


const usuariosPut = (req,res=response)=>{
    
    const id = req.params.id;
    res.json({
        msg:'put API - Controlador',
        id
    });
};


const usuariosPatch= (req,res=response)=>{
    res.json({
        msg:'patch API - controller '
    });
};


const usuariosDelete = (req,res)=>{
    res.json({
        msg:'delete API - controller'
    });
};


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}