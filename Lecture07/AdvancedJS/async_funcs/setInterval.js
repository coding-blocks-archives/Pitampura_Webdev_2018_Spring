
let helloId = setInterval(function () {
  console.log("HELLO")
}, 1000)

setTimeout(function () {
  clearInterval(helloId)
}, 5000)