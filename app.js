const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
  console.log('Please provide an address.');
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    const parsedData = JSON.parse(data);
    forecast(
      parsedData.latitude,
      parsedData.longitude,
      (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(parsedData.location);
        console.log(forecastData);
      }
    );
  });
}