const route = require('express').Router()
const passport = require('passport')

route.get('/', (req, res) => {
  res.render('signin')
})

route.post('/',
  passport.authenticate(
      'local',
      {failureRedirect: '/signin'}
    ),
  (req, res) => {
    res.redirect('/myaccount')
  }

)


module.exports = route