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

const geoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXVoYW1tYWR5b3VzdWYiLCJhIjoiY2s0djk4ZXhoMjE2ajNkcDFvYW9zZHFidyJ9.ZEfb-BN9dNzdt8WlLJAw1Q&limit=1";
request({ url: geoCodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, " ", longitude);
});
