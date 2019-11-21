require('dotenv').config()
const request = require('request')

const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY + '/37.8267,-122.4233?units=si'
console.log(url)

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + process.env.MAPBOXTOKEN + '&limit=1'
console.log(geocodeUrl)

request({ url, json:true }, (error, response) => {
    //console.log(response.body.currently)

    console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})

request({ url: geocodeUrl, json:true}, (error, response) => {
  console.log("Los Angeles is at: " + response.body.features[0].center[1] + ", " + response.body.features[0].center[0])
})
