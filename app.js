const request = require('request')

const url = 'https://api.darksky.net/forecast/301f7c4420ad29d44135ac28b021da44/37.8267,-122.4233'

request({ url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})