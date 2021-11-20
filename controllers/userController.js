const passport = require('passport')
const User = require('../models/User')
const { genPassword } = require('../utils/passwordUtil')

const registerHandler = async (req, res) => {
  const { email, name, password, password2 } = req.body

  // Check required fields
  if (!email || !name || !password || !password2) {
    return res.redirect('/register')
  }

  // Check passwords match
  if (password !== password2) {
    return res.redirect('/register')
  }

  const user = await User.findOne({
    where: { email: email },
  })
  if (user) {
    return res.redirect('/register')
  }

  const hashPassword = genPassword(password, 10)

  User.create({
    name: name,
    email: email,
    password: hashPassword,
  })
    .then((user) => {
      console.log(user)
      res.redirect('/login')
    })
    .catch((err) => console.log(err))
}

const loginHandler = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/upload-bukti',
    failureRedirect: '/login',
  })(req, res, next)
}

const logoutHandler = (req, res) => {
  req.logout()
  res.redirect('/login')
}

module.exports = {
  registerHandler,
  loginHandler,
  logoutHandler,
}
