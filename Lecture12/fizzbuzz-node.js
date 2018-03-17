let N = 1000
if (process.argv.length > 2) {
  N = parseInt(process.argv[2])
}
let o;
for (let i = 1; i <= N; i++) {
  o = ''
  if (i % 3 == 0) { o += 'fizz' }
  if (i % 5 == 0) { o += 'buzz' }
  if (o === '') { o = i }
  console.log(o)
}
let c3 = 0, c5 = 0
for (let i = 1; i <= N; i++) {
  c3++;
  c5++;
  o = ''
  if (c3 == 3) {
    o += 'fizz';
    c3 = 0
  }
  if (c5 == 5) {
    o += 'buzz'
    c5 = 0
  }
  if (o === '') {
    o = i
  }
  console.log(i)
}