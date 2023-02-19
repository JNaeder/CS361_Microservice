const axios = require("axios");

const getWeather = async function (lat, long) {
  // const url = `https://cs361weather.onrender.com/weather?lat=${lat}&long=${long}`;
  const url = `https://127.0.0.1:5000/weather?lat=${lat}&long=${long}`;
  const output = await axios.get(url);
  console.log(output.data);
};

// getWeather(48.8566, 2.3522);
// getWeather(41.948438, -87.655333);
getWeather(35.7012358, 139.7740214);
// getWeather(32.3132695, 117.8908925);
