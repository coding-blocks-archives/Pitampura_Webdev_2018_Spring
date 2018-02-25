function waitASec() {
  let startTime = (new Date()).getTime()
  while ((new Date()).getTime() < 1000 + startTime);
}
setTimeout(function () {
  a = false
}, 3000)

let a = true
while (a) {
  waitASec()
  console.log("HELLO");
}

