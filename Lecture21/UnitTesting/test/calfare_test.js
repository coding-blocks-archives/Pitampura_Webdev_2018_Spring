require('mocha')
const chai = require('chai')
const expect = chai.expect

const {calcFare} = require('../server')

describe('Calcfare', () => {
  it('should be 25 for 2km, 0 min', () => {
    expect(calcFare(2,0)).to.be.a('number')
    expect(calcFare(2,0)).to.equal(25)
  })
  it('should be 35 for 3km, 0 min', () => {
    expect(calcFare(3,0)).to.be.a('number')
    expect(calcFare(3,0)).to.equal(35)
  })
  it('should be 45 for 3km, 20 min', () => {
    expect(calcFare(3,20)).to.be.a('number')
    expect(calcFare(3,20)).to.equal(45)
  })
})