require('mocha')
const chai = require('chai')
const expect = chai.expect

const app = require('../server').app

const request = require('request')

describe('Server', () => {
  let server
  before(() => {
    server = app.listen(4444)
  })

  it ('should be 25 for 2km, 0 min', (done) => {
    request.get('http://localhost:4444/calcfare?min=0&km=2', (err, response, body) => {
      expect(body).to.equal('FARE = 25')
      done()
    })
  })


  after(() => {
    server.close()
  })
})

