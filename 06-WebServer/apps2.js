
const express = require('express')
const app = express()
const port=3000;


// Ejecutar MidelWare

// Servir contenido estatico, definri permisos sobre el directorio
app.use ( express.static('public'));

// Estas lineas ya no se usa:
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
});


app.get('/elements',(req,res)=>{
    res.sendFile(__dirname +'/public/elements.html')
})

app.get('*',(req,res)=>{
    
    // Linea para mostrar string
    //res.send("<h1>404 | Page not Found</h1>")

    // Linea para cargar una pagina
    res.sendFile(__dirname + '/public/msg_server/404.html')
})

// Se agregó un callback
app.listen(port,()=>{
    console.log(`Servicio ejecutandose en el puerto ${port}`);
})