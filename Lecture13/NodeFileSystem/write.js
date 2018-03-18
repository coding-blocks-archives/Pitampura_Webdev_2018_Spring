const fs = require('fs')

fs.writeFile(
  'hello.txt',
  'Hello World !',
  {flag: 'a'},
  (err) => {
    if (err) throw err
    console.log("File written")
  }
)

console.log("Write file")
