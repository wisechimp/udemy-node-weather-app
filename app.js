const request = require('request')

const url = 'https://api.darksky.net/forecast/301f7c4420ad29d44135ac28b021da44/37.8267,-122.4233'

request({ url, json:true }, (error, response) => {
    //console.log(response.body.currently)

    console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})
