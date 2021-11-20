const bcrypt = require('bcrypt')

const genPassword = (password, saltRound) => {
  const salt = bcrypt.genSaltSync(saltRound)
  const hashPassword = bcrypt.hashSync(password, salt)

  return hashPassword
}

const isValidPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword)
}

module.exports = { genPassword, isValidPassword }
