const fs = require('fs')

fs.readFile('hello.txt', (err, data) => {
  if (err) throw new Error("Could not read")

  console.log("File read")
  console.log(data.toString())
})