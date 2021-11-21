const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const { isValidPassword } = require('../utils/passwordUtil')

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      User.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              msg: 'There is no user with that email',
            })
          }

          const isValid = isValidPassword(
            password,
            user.password,
          )

          if (isValid) {
            return done(null, user)
          } else {
            return done(null, false, {
              msg: 'Incorrect password',
            })
          }
        })
        .catch((err) => {
          return done(err)
        })
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  User.findByPk(userId)
    .then((user) => {
      done(null, user)
    })
    .catch((err) => {
      done(err)
    })
})
