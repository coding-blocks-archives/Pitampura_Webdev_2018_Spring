class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.isAdult = function () {
      return age > 18
    }

  }
  static ageDiff(p1, p2) {
    return Math.abs(p1.age - p2.age)
  }
  getFirstName() {
    return this.name.split(" ")[0]
  }
  get lastName() {
    return this.name.split(" ")[1]
  }
  set lastName(value) {
    let nameArr = this.name.split(" ")
    nameArr.pop()
    nameArr.push(value)
    this.name = nameArr.join(" ")
  }
}

class Student extends Person {
  constructor(name, age, college) {
    console.log("Ctr called")
    super(name, age)
    this.college = college
  }
}

let p1 = new Person('John Doe', 30)
let s1 = new Student('Harry Potter', 15, 'Hogwarts')