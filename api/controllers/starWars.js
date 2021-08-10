module.exports = () => {
    const axios = require('axios');
    const controllerStar = {};
   const films = require('../data/films.json')
   


    controllerStar.listfilms = (req, res) => {
        (async () => {
            try {
              const response = await axios.get('https://swapi.dev/api/films')
              /*films.filmsName.push(response.data.results[1].title)
              console.log('okay');*/
              for(let i =0; i<6;i++){
                films.filmsName.push(response.data.results[i].title)
              }
              res.status(200).json(films);
            } catch (error) {
              console.log(error);
            }
          })();
    }
    return controllerStar;
  }