
const saveData = require('../utils/saveData');
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

        saveData(recipes, 'recipe.js');

        /*Redirecionando a uma rota*/
        res.redirect('/recipes')

    },

    async edit(req, res, next) {
        let id = req.params.id;

        //Alterando o arquivo da receita
        let recipe = recipes.find(recipe => recipe.id == id);
        res.render('edit-recipe',{ recipe });
    },

    async update(req, res, next) {
        let id = req.params.id;
        let { nome, email, mensagem } = req.body;

        let recipe = recipes.find(recipe => recipe.id == id);

        recipe.nome = nome;
        recipe.email = email;
        recipe.mensagem = mensagem;

        saveData(recipes, 'recipe.js');

        res.render('edit-recipe', { recipe, updated: true });
    },

    async delete(req, res, next) {
        let id = req.params.id;
        //1 Forma de remover o elemento do json
        //Encontrando um elemento e obtendo o indice do mesmo.
        //let recipeIndex = recipes.findIndex(recipe => recipe.id == id)

        //Removendo o elemento com base no indice
        //recipes.splice(recipeIndex, 1)
        

        //2 Forma de remover o elemento do json
        //Encontrando e Excluindo um elemento com o metódo filter
        let recipeFilter = recipes.filter(recipe => recipe.id != id)

        saveData(recipeFilter, 'recipe.js');

        res.render('recipes',{ recipes: recipeFilter, deleted: true })
    }
}


