require('dotenv').config()
const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY + '/' + latitude + ',' + longitude + '?units=si'

  request({ url, json:true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the weather service.')
    } else if (response.body.error) {
      callback(response.body.error)
    } else {
      callback(undefined, "It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
    }
  })
}

module.exports = forecast
