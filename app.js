const request = require("request");

const url =
  "https://api.darksky.net/forecast/425ac3054ab42e0b7eaa3a53faf865a4/37.8267,-122.4233";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
