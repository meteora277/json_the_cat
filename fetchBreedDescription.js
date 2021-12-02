const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request.get(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, status, body) =>{

    if (JSON.parse(status.body).length === 0) {
      error = "no cats";
      callback(error, null);
    } else {
      
      let description = JSON.parse(body)[0].description;
      callback(null, description);
    }
  });

};

module.exports = fetchBreedDescription;