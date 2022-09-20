const express = require('express');

const app = express();


//importando rotas da aplicacao.
const routes = require('./routes/routes');

//indica que a aplicação ira trabalhar com as rotas.
app.use(routes);


// Desafio - criar um servidor com express e utilizar o método listen
// contendo dentro de um console.log('Servidor rodando na porta: numeroDaPorta')
app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
})
