const args = process.argv.slice(2);
const request = require("request");

const breedFetcher = function (breed) {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?name=${breed}`,
    (error, status, body) => {
      // console.log(error)
      // console.log(body)
      if (error) {
        console.log(error);
        console.log('cat not found :(');
      } else {
        if (JSON.parse(status.body).length !== 0) {
          let object = JSON.parse(body);
          let { name, description } = object[0];
          console.log(`${name} - ${description}`);
        } else {
          console.log("uwu nothing there");
        }
      }
    }
  );
};

module.exports = breedFetcher;