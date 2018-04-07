const mysql = require('mysql2/promise')

let teacherId = parseInt(process.argv[2])
let newBatch = process.argv[3]


const conn = mysql.createConnection({
  host: 'localhost',
  // port: 3306,
  user: 'stumanuser',
  database: 'stumandb',
  // optional, if user has one
  password: 'stumanpass'
})

conn.query(
  `UPDATE students SET batch = ? WHERE teacherId = ?`, [newBatch, teacherId],
).then((result) => {

}).catch(err => {
  throw err
})