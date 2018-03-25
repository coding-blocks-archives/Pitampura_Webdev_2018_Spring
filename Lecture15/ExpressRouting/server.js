const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const routes = {
  teachers: require('./routes/teachers'),
  courses: require('./routes/courses')
}

app.use('/mentors', routes.teachers)
app.use('/courses', routes.courses)


app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});