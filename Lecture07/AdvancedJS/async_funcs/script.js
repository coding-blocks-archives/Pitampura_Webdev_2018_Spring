

let a = setInterval(function () {
  console.log("HELLO")
}, 1000)

setTimeout(function () {
  clearInterval(a)
}, 4000)