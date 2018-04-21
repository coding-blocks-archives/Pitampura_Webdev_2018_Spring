const {MongoClient} = require('mongodb')

const dbUrl = 'mongodb://localhost:27017'

const dbName = 'testdb'

async function getTodoCollection () {
  const client = await MongoClient.connect(dbUrl)
  const testDb = client.db(dbName)
  const todos = testDb.collection('todos')
  return todos
}

async function insertTodo () {
  try {
    const todos = await getTodoCollection()
    const result = await todos.insertOne(
      {task: 'more tasks', done: true, priority: 3}
      )
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}

async function showTodos() {
  try {
    const todos = await getTodoCollection()
    const docs = await todos.find({
      $and: [
        {priority:{$in: [1,3]}},
        {priority: {$exists: true}}
      ]
    }).sort({priority: -1}).toArray()
    for (todo of docs) {
      console.log(`task: ${todo.task}, done: ${todo.done}, priority: ${todo.priority}`)
    }
  } catch (err) {
    console.log(err)
  }
}

insertTodo()
// showTodos()


//
// MongoClient.connect(dbUrl)
//   .then((client) => {
//     console.log('MongoDB Connected')
//
//     const testDb = client.db(dbName)
//     if (testDb) {
//       console.log('testdb created')
//     }
//     const todos = testDb.collection('todos')
//     return todos.insertOne({task: 'something', done: false})
//
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err))

