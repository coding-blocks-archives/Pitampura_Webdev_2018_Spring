const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/calcfare', (req, res) => {
  const km = parseFloat(req.query.km)
  const min = parseInt(req.query.min)
  res.send("FARE = " + calcFare(km, min))
})

/**
 * Fare is calculated as follows -
 * Rs. 25 base fare
 * Rs. 10 per km after first 2 km
 * Rs. 2 per min of waiting, after first 15 min
 * @param km
 * @param min
 */
function calcFare(km, min) {
  let fare = 25
  if (km > 2) {
    fare += (km - 2) * 10
  }
  if (min > 15) {
    fare += (min - 15) * 2
  }
  return fare

}

module.exports = {
  calcFare,
  app
}