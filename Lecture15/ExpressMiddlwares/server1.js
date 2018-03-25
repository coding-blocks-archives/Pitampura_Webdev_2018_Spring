const express = require('express');

const app = express();

function m1 (r, s, next) {
  console.log('m1')
  if (r.query.m === '1') {
    s.send('m1')
  } else {
    next()
  }
}
function m2 (r, s, next) {
  console.log('m2')
  if (r.query.m === '2') {
    s.send('m2')
  } else {
    next()
  }
}
function m3 (r, s) {
  console.log('m3')
  s.send('m3')
}

app.use(m1)
app.use(m2)
app.use(m3)


app.listen(6767, function () {
    console.log("Server started on http://localhost:6767");
});