function outerFun (anotherFun) {
  console.log(typeof anotherFun)
  console.log("This is outer function")
  return anotherFun
}

function innerFun () {
  console.log("This is inner function")
}

outerFun(innerFun)()
