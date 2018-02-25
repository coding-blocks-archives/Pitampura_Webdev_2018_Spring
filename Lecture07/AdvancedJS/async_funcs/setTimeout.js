function waitASec() {
  let startTime = (new Date()).getTime()
  while ((new Date()).getTime() < 1000 + startTime);
}

function runAfterNSec(fun, N) {
  for(let i = 0; i < N; i++) {waitASec()}
  fun()
}
function myFun() {
  console.log("Function is running")
  console.log(new Date().getTime())
}


console.log("Going to run")
// runAfterNSec(myFun, 5)
console.log(new Date().getTime())
setTimeout(myFun, 5000)
console.log("Has run")