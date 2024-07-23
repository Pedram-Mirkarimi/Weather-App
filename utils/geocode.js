const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoicGVkcmFtLW1pcmthcmltaSIsImEiOiJja2hycXFpZDMxeDViMnZteG5oNjY4dnczIn0.qOYMpxBWZYr57tX1PsQBLw&limit=1';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(
        undefined,
        JSON.stringify({
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
        })
      );
    }
  });
};

module.exports = geocode;