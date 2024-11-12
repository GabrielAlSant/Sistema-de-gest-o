var express = require('express');
var router = express.Router();
const {autenticar, validarusuario} = require('../controllers/autenticarController')

router.get('/', autenticar);
router.post('/validar', validarusuario)

module.exports = router;
