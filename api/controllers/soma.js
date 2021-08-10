module.exports = () => {
    const variavelBD = require('../data/var.json');
    const controllerSoma = {};

    controllerSoma.somavariavel = (req,res) => {
        const var1 = req.body.variavel_1;
        const var2 = req.body.variavel_2; 
        variavelBD.soma = var1 + var2;
        res.status(201).json(variavelBD);
    }
    return controllerSoma;
  }