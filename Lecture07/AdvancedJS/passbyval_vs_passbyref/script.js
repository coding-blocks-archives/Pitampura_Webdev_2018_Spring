let x = 10
let y = 20
let z = 10
let arr = [10, 20, 10]

function add (a, b, c) {
  c = a + b
}
function addArr(b) {
  let a = b
  a[2] = a[0] + a[1]
}

add(x, y, z)
addArr(arr)
console.log(arr)
console.log([10,20,30])
console.log(arr == [10,20, 30])