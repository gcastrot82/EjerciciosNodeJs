const { Router } = require('express');

const { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuariosDelete } = require('../controllers/usuarioscontroller');
//const { usuariosPut } = require('../controllers/usuarioscontroller')


const router = Router();


router.get('/',usuariosGet);

router.post('/',usuariosPost);

router.put('/:id',usuariosPut);

// this.app.post('/api',(req,res)=>{
//     res.json({
//         msg:'post API'
//     });
// });

// Enviar el status por defecto


router.patch('/',usuariosPatch);


router.delete('/',usuariosDelete);

module.exports = router;