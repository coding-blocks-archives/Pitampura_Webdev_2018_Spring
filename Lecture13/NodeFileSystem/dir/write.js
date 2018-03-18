const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'hello.txt')

fs.writeFile(
  file,
  'Hello World !',
  {flag: 'a'},
  (err) => {
    if (err) throw err
    console.log("File written")
  }
)

console.log("Write file")
