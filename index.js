// Import stuff
require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const phrases = require("./phrases");

// Variables
const app = express();
app.use(cors);
const port = 5000;
const weatherAPI = process.env.WEATHER_KEY;

// My Functions
const getLocationData = async function (lat, long) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${lat},${long}&aqi=no`;
  const output = await axios.get(url);
  return output["data"];
};

const getRandomPhrase = function (phraseArray) {
  const randomNumber = Math.trunc(Math.random() * phraseArray.length);
  return phraseArray[randomNumber];
};

const getTempPhrase = function (tempF) {
  if (tempF < 50) {
    return getRandomPhrase(phrases.coldPhrases);
  } else if (tempF > 90) {
    return getRandomPhrase(phrases.hotPhrases);
  } else {
    return getRandomPhrase(phrases.perfectPhrases);
  }
};
const makeOutputData = function (locationData) {
  const tempF = locationData["current"]["temp_f"];
  const output = {
    name: `${locationData["location"]["name"]}`,
    region: `${locationData["location"]["region"]}`,
    country: `${locationData["location"]["country"]}`,
    temp_celsius: `${locationData["current"]["temp_c"]}`,
    temp_fahrenheit: `${tempF}`,
    phrase: getTempPhrase(tempF),
  };
  return output;
};

// Express Funtions
app.get(
  "/weather",
  asyncHandler(async (req, res) => {
    console.log(
      `Request-----Latitude:${req.query.lat} - Longitude:${req.query.long}`
    );

    const locationData = await getLocationData(req.query.lat, req.query.long);
    const output = makeOutputData(locationData);
    res.send(output);
  })
);

// Start Server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
