var express = require('express');
var router = express.Router();
const {home} = require('../controllers/homeController')

router.get('/', home);

module.exports = router;
