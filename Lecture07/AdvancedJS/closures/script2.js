function createCounter (start = 0, delta = 1) {
  console.log(start)

  function count () {
    console.log(start)
    return 7;
  }

  return 10
}

let x = createCounter(5,6)
// x()