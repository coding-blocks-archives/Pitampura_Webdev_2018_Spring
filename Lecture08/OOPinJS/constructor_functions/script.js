function Person (name, age) {
  this.name = name
  this.getFirstName = function () {
    return this.name.split(" ")[0]
  }
  this.isAdult = function () {
    return age > 18
  }
}
function staticFun () {
  console.log("This is static")
  console.log(this)
}
Person.staticFun = Person.prototype.staticFun = staticFun


// let p1 = Person()
let p2 = new Person("John Doe", 30)
let p3 = new Person("Harry Potter", 15)