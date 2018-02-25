function funGen() {
  let x = 0;
  function newFun () {
    let y = x+1
    function newerFun () {
      y++
      return y
    }
    return newerFun
  }

  return newFun
}

let fun1 = funGen()
let fun2 = funGen()
let fun11 = fun1()
let fun12 = fun1()
let fun21 = fun2()
console.log(fun11())
console.log(fun12())
console.log(fun21())
console.log(fun21())


