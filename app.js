require('dotenv').config()
const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY + '/37.8267,-122.4233?units=si'
// console.log(url)
//
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + process.env.MAPBOXTOKEN + '&limit=1'
// console.log(geocodeUrl)
//
// request({ url, json:true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to the weather service.')
//   } else if (response.body.error) {
//     console.log(response.body.error)
//   } else {
//     console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
//   }
// })

geocode('Staffanstorp', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
