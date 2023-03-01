const bcrypt = require('bcrypt');
const users = require('../data/user.js');
const recipes = require('../data/recipe.js');
const saveData = require('../utils/saveData.js');

module.exports = {
    create(req, res, next) {
        res.render('create-user');
    },

    save(req, res, next) {
        let id = users.length + 1;

        /*Criando senha criptografada*/
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

        /*Criando objeto para enviar no array users*/
        let user = { id, ...req.body };
        users.push(user);
        
        saveData(users, 'user.js');

        res.render('create-user', { added: true });
    },

    login (req, res, next) {
        res.render('login');
    },

    authenticate(req, res, next) {
        let { email, password } = req.body;
        let user = users.find(user => user.email == email);

        if(!user){
          return res.render('login', { notFound: true });
        }
        
        if(!bcrypt.compareSync(password, user.password)) {
           return res.render('login', { notFound: true });
        };
        
        //Removendo a propriedade password para proteger a senha do usuário.
        let{ password: pass, ...userWithoutPassword } = user;

        req.session.user = userWithoutPassword;
    

        res.render('recipes', { user: req.session.user , recipes });
    },
    
    logout(req, res, next) {
        req.session.destroy();
        res.redirect('/');
    }
}