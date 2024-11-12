var express = require('express');
var router = express.Router();
const {alltask, onetask, oneUsertask, searchtask} = require('../controllers/taskController')

router.get('/', alltask);
router.get('/search', searchtask);
router.get('/:id', oneUsertask);
router.get('/task/:id', onetask);



module.exports = router;
