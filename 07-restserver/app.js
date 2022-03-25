

require('dotenv').config()
const Server = require('./models/server');


// Codigo Viejo
// const express = require('express');
// const app = express();

// //const port = 3000;


// app.get('/',(req,res) =>{
//     res.send('Hola mundo!!!')
// });


// app.listen(process.env.PORT, () =>{
//     console.log(`Servidor cargado en el puerto ${process.env.PORT}`)
//});




const server = new Server();

server.listen();