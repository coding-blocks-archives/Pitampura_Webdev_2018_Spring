let arrowGetX = () => this.x

function normalGetX() {
  return this.x
}
this.x = 30
let obj1 = {
  x: 10,
  g: normalGetX,
  h: arrowGetX
}

let obj2 = {
  x: 20,
  g: normalGetX,
  h: arrowGetX
}