const request = require("request");

const url =
  "https://api.darksky.net/forecast/425ac3054ab42e0b7eaa3a53faf865a4/24.8607,67.0011";

request({ url, json: true }, (error, response) => {
  const { currently, daily } = response.body;
  console.log(
    daily.data[0].summary +
      " It is currently " +
      currently.temperature +
      " degress out. There is a " +
      currently.precipProbability +
      "% chance of rain."
  );
});
