const express = require('express');
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')

// Static Files
app.use('/', express.static(path.join(__dirname, 'public')))

// Routes
app.use('/products', require('./routes/products'))
app.use('/signin', require('./routes/signin'))
app.use('/signup', require('./routes/signup'))

app.listen(9898, function () {
    console.log("Server started on http://localhost:9898");
});