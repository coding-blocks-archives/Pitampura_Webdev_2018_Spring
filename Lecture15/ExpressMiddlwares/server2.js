const express = require('express');

const app = express();

function ma (r,s,n) {
  r.xyz = 'asjhdvasjgdvjdsa'
  console.log('ma')
  n()
}

function maa (r,s,n) {
  console.log(r.xyz)
  console.log('maa')
  n()
}

function mab (r,s,n) {
  console.log('mab')
  n()
}

function mb(r,s,n) {
  console.log('mb')
  n()
}
function m(r,s,n) {
  console.log(r.xyz)
  console.log('m')
  n()
}
function e(r, s) {
  s.send('done')
}
const c = express.Router()
c.get('/', (r,s,n) => n())
c.get('/a', (r,s,n) => {console.log('ca'); n()})


app.use('/a', ma)
app.use('/b', mb)
app.use(m)
app.use('/a/a', maa)
app.use('/a/b', mab)
app.use('/c', c)
app.use(e)

app.listen(7878, function () {
    console.log("Server started on http://localhost:7878");
});