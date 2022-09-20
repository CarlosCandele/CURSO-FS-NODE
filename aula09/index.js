const express = require('express');

const app = express();


// Desafio - criar um servidor com express e utilizar o método listen
// contendo dentro de um console.log('Servidor rodando na porta: numeroDaPorta')
app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
})



app.get('/', (req, res) => {
    res.send('Home page no browser')
})

// Desafio - Criar uma rota parametrizada, que irá se chamar/cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber
// esse parâmetro que foi informado na URL e exibir uma mensagem de cumprimento 'Hello, parâmetro'.


app.get('/cumprimentar/:nome', (req, res) => {
    let{ nome } = req.params;
    res.send('Hello ' + nome)
})


// Desafio - Criar uma rota parametrizada, que irá se chamar/calcular 
// e terá dois parâmetros que serão numeros, caso, receba apenas o primeiro parâmetro,
// deverá retornar ele, casao recebe os dois parâmetros terá que somar os 2 e returnar
//o resultado.

app.get('/calcular/:numero1/:numero2?', (req, res) =>{
  let { numero1, numero2 } = req.params;

  if(typeof numero2 !== 'undefined'){
    let result = parseInt(numero1) + parseInt(numero2);
    res.send('O valor da soma dos 2 parâremetros informados na URL é: ' + result);
  }else{
    res.send(numero1)
  }
})