module.exports = app => {
    const controllerHello = require('../controllers/helloWorld')();
    const controllerSoma = require('../controllers/soma')();
    const controllerStar = require('../controllers/starWars')();
  
    app.route('/hello')
      .get(controllerHello.listhelloWorld);

    app.route('/soma')
      .post(controllerSoma.somavariavel);

    app.route('/starwars/films')
      .get(controllerStar.listfilms)
  }