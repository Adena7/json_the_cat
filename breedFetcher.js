const request = require('request');
let breed = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    if (error) {
        callback(`Failed: ${error}`, null)
    }
    const data = JSON.parse(body)[0];

    if (!data) {
      callback('Breed not found!', null);
      return;
    }

    // if there is a breed
    if (data) {
      callback(null, data.description);
    }

  });
};
module.exports = { fetchBreedDescription };
