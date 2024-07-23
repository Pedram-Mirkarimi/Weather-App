const request = require('request');

const forecast = (lat, lon, callback) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
    lat +
    '&lon=' +
    lon +
    '&appid=0518b0f3bd1f28da019feb94c9e2f2af&units=metric';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect the weather service!', undefined);
    } else if (body.cod == 400) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        body.weather[0].description +
          ". It's currently " +
          body.main.temp +
          ' degrees out.' +
          ' The humidity is ' +
          body.main.humidity +
          '%.'
      );
    }
  });
};

module.exports = forecast;