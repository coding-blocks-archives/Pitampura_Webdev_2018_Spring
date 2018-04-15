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

const User = db.define('user', {
  username: {
    type: Sequelize.DataTypes.STRING(25),
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  }
})

db.sync().then(() => console.log("Database Ready"))



module.exports = {
  Product, User
}
