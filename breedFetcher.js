const request = require('request');
let breed = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.log('error: ', error);
    return;
  }

  const data = JSON.parse(body)[0];
  console.log(data.description);

});
