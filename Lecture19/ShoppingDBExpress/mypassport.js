const passport = require('passport')
const {User} = require('./db/models')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  if (!user.id) {
    return done(new Error("User has no ID"))
  }

  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  User.findOne({
    where: {id: userId}
  }).then((user) => {
    if (!user) {
      return done(new Error("No user found"))
    }

    done(null, user)
  }).catch((err) => done(err))
})

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({
    where: {username: username}
  }).then((user) => {
    if (!user) {
      // Username does not exist
      return done(null, false)
    }
    // In production use password hashes, do not save in db
    if (user.password !== password) {
      // Username exists, but password mismatch
      return done(null, false)
    }

    // All good
    done(null, user)

  }).catch(err => done(err))
}))

module.exports = passport