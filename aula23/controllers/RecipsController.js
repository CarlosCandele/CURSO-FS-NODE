const fs = require('fs');
const path = require('path');


const recipes = require('../data/recipe')


module.exports = {
    index(req, res, next) {
        
        res.render('recipes', { recipes: recipes});
    },
    save(req, res, next) {
        /*Obtendo a quantiadade do array recipes e somando + 1 */
        let id = recipes.length + 1;

        /*Criando obejto para seguir padrão dentro do arquivo data/recipe.js */
        let recipe = { id, ...req.body };

        /*Adicionando novo objeto dentro do array recipe usando o metódo push*/
        recipes.push(recipe);

        /*Convertendo o array recipes em uma string */
        let dataString = JSON.stringify(recipes);

        /*Obetendo caminha até o aqruivo data/recipe.js */
        let filePath = path.join('data', 'recipe.js');
        
        fs.writeFileSync(filePath, 'module.exports = ')  
        
        fs.appendFileSync(filePath, dataString);

        /*Redirecionando a uma rota*/
        res.redirect('/recipes')

    },
    async edit(req, res, next) {

    },
    async update(req, res, next) {

    },
    async delete(req, res, next) {
        let id = req.params.id;
        recipes.splice(id - 1, 1)

        /*Convertendo o array recipes em uma string */
        let dataString = JSON.stringify(recipes);

        /*Obetendo caminha até o aqruivo data/recipe.js */
        let filePath = path.join('data', 'recipe.js');
        
        fs.writeFileSync(filePath, 'module.exports = ')  
        
        fs.appendFileSync(filePath, dataString);

        res.render('recipes',{ recipes, deleted : true })
    }
}


