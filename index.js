const fetchBreedDescription = require("./fetchBreedDescription");

const args = process.argv.slice(2);

fetchBreedDescription(args, (error, desc) => {

  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }

});