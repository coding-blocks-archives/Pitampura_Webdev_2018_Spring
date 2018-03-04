function normalFunction (x) {
  return Math.sqrt(x)
}

let arrowFun = (x) => Math.sqrt(x)

let v = normalFunction(10) == arrowFun(10)
console.log(v)

let x = [1,2,3,4].map(i => Math.pow(i,4))