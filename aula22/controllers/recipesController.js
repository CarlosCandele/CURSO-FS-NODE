const fs = require('fs');
const path = require('path');

const recipes = require('../data/recipes')


module.exports = {
    index(req, res, next) {
        res.render('recipes', { recipes });
    },

    save(req, res, next) {
        //console.log(req.body); Testando a nossa rota.

        //Adicionando um id sequêncial.
        let id = recipes.length + 1;
        let recipe = { id, ...req.body };

        //Adicionando um objeto dentro do array recipes.
        recipes.push(recipe);

        let dataString = JSON.stringify(recipes)
       // res.status(200).json(recipes);//Visualiza a solicitação na tela da aplicação em desenvolvimento.

        //Obtendo o caminho até o arquivo data/recipe.js.
        let filePath = path.join('data', 'recipes')
        //res.status(200).json(filePath);

        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);

        res.redirect('/recipes')

    }
}