require('dotenv').config()
const request = require('request')

const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY + '/37.8267,-122.4233?units=si'
console.log(url)

const mapboxToken = 'pk.eyJ1Ijoid2lzZWNoaW1wIiwiYSI6ImNqcnRia21rOTBqaWQ0M25wM2d6N3o0NnMifQ.FTiAf09nKL12rrVaAFsZZQ'

request({ url, json:true }, (error, response) => {
    //console.log(response.body.currently)

    console.log("It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})
