require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Staffanstorp', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

forecast(55.63, 13.2, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
