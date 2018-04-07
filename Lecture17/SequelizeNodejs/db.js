const Sequelize = require('sequelize')

const db = new Sequelize(
  'stumandb',
  'stumanuser',
  'stumanpass',
  {
    host: 'localhost',
    // port: 3306,
    dialect: 'mysql'
  }
)


const Batches = db.define(
  'batch', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.DataTypes.STRING,
    capacity: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }
  }
)


async function batchTasks() {
  await Batches.sync()
  // await Batches.create({
  //   name: 'Perceptron',
  //   capacity: 30
  // })
  // await Batches.create({
  //   name: 'Gamedev'
  // })
  let results = await Batches.findAll()
  for (batch of results) {
    console.log(batch.dataValues)
  }
}

batchTasks()
console.log('HELLO')