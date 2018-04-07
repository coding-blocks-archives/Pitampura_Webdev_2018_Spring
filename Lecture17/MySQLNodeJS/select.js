const mysql = require('mysql2')

const conn = mysql.createConnection({
  host: 'localhost',
  // port: 3306,
  user: 'stumanuser',
  database: 'stumandb',
  // optional, if user has one
  password: 'stumanpass'
})

conn.query(
  `SELECT * from students`,
  (err, results, fields) => {
    if (err) throw err

    let headerStr = ''
    for (col of fields) {
      headerStr += col.name + '\t\t\t'
    }
    console.log(headerStr)

    for (row of results) {
      let rowStr = ''
      for (col of fields) {
        rowStr += row[col.name] + '\t\t\t'
      }
      console.log(rowStr)
    }
}
)