let a = {
  k: 1,
  l: 'hello',
  m: true,
  n: [1,2,3]
}

let b = Object.create(a)
if (b.k) {
  console.log("b has k")
}
b.k++
if (b.hasOwnProperty('k')) {
  console.log('k was defined in b')
} else {
  console.log('k was inherited into b')
}

let c = Object.create(b)