module.exports = () => {
    const hellWorldBD = require('../data/helloWorld.json');
    const controllerHello = {};
  
    controllerHello.listhelloWorld = (req, res) => res.status(200).json(hellWorldBD.data);
  
    return controllerHello;
  }