const express = require('express');
const session = require('express-session')
const passport = require('./mypassport')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'something that should not be shared',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')

// Static Files
app.use('/', express.static(path.join(__dirname, 'public')))

// Routes
app.use('/products', require('./routes/products'))
app.use('/signin', require('./routes/signin'))
app.use('/signup', require('./routes/signup'))
app.use('/myaccount', require('./routes/myaccount'))
app.use('/cart', require('./routes/cart'))

app.listen(9898, function () {
    console.log("Server started on http://localhost:9898");
});