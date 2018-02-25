function funGen() {
  let x = 0;
  function newFun () {
    x++
    return x;
  }

  return newFun
}

let fun = funGen()
let fun2 = funGen()
console.log(fun())
console.log(fun())
console.log(fun())
console.log(fun2())
console.log(fun())
