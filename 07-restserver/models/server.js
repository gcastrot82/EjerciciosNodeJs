
const express = require('express');
const cors = require('cors');


class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosRoutePath = '/api/usuarios'



        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }


    middlewares(){
        
        // CORS
        this.app.use(cors())

        //Directorio publico
        this.app.use(express.static('public'));

        // Lectura y parseo del body, cualquier informacion que venga  la va a intentar serealizar a formato json
        this.app.use ( express.json());



    }

    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto: ',this.port);
        });


    }

}


module.exports = Server;