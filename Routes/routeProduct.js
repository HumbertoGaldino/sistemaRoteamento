const express = require('express');

const router = express.Router();

router.get('/criar',(req,res)=>res.send('Criando produto!'));
router.get('/deletar',(req,res)=>res.send('Deletando produto!'));

module.exports = router;
