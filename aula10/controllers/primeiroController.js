module.exports = {
    index(req, res) {
        res.send('Manipulando controllers ')
    },

    cumprimentar(req, res) {
        let{ nome } = req.params;
        res.send("Hola " + nome);
    },

    calcular(req, res) {
        let { numero1, numero2 } = req.params;
        if(typeof numero2 !== 'undefined'){
            let result = parseInt(numero1) + parseInt(numero2);
            res.send('O valor da soma entre os parâmetros infomados é ' + result);
        }else{
            res.send(numero1);
        }
    },
    
    getQueryParams(req, res) {
        let { nome } = req.params;
        let { sobrenome } = req.query;//O req.query funciona depois da interrogação
        
        res.send('Ola, ' + nome + ' ' + sobrenome);
    }  
}