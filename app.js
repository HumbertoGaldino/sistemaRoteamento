const express = require('express');

const routeProduct = require('./Routes/routeProduct')

let app = express();

app.listen(3000,()=>console.log("Servidor rodando na porta 3000"));

app.get('/',(req,res)=>{
    res.send('Servidor Funcionando!');
});

app.get('/contato/:id',(req,res)=>{
    res.send('Servidor Funcionando!');
});

//Sistema de Rotas
app.use('/produto', routeProduct);
