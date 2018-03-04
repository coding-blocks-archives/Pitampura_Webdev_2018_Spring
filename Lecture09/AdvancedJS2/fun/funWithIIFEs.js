// let c = 0
// let x = setInterval(function () {
//   console.log('yo')
// }, 1000)

// setTimeout(function () {
//   clearInterval(x)
// }, 6000)


// let id = (setTimeout(function () { 
//   clearInterval(id)
// }, 6000), setInterval (function () {
//   console.log('yo')
// }, 1000))

(function (id) {
  setTimeout(() => clearInterval(id), 6000)
})( setInterval(() => console.log('yo'), 1000) )

setTimeout(function (id) {
  clearInterval(id)
}, 6000, setInterval(function () {
  console.log('yo')
}, 1000))