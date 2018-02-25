
let x = 10;

function fun1 () {
  let x = 20; // shadows the outer x
  console.log(x)
  if (true) {
    let x = 30
    console.log(x)
  }
  console.log(x)
}

// fun1()

var y = 10;

function fun2() {
  var y = 20;
  if (true) {
    var y = 30;
  }
  console.log(y)
}

fun2()