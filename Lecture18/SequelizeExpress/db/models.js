const Sequelize = require('sequelize')

const db = new Sequelize(
  'shopsampledb',
  'shopadmin',
  'shoppass',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
)

const Product = db.define('product', {
  name: {
    type: Sequelize.DataTypes.STRING(20),
    allowNull: false
  },
  price: {
    type: Sequelize.DataTypes.FLOAT
  }
})

db.sync().then(() => console.log("Database Ready"))



module.exports = {
  Product
}
