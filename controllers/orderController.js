const User = require('../models/User')
const Order = require('../models/Order')
const fs = require('fs')

const uploadTransaction = (req, res) => {
  User.hasMany(Order, { foreignKey: 'id' })
  Order.belongsTo(User)

  if (!req.file) {
    res.status(400).redirec('/upload-bukti')
  }

  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) {
        res.status(401).redirect('/login')
      }
    })
    .catch((err) => console.log(err))

  const { packet, date, address, bankAccount, total } =
    req.body

  Order.create({
    packet: packet,
    date: date,
    address: address,
    bankAccount: bankAccount,
    total: total,
    uploadTransaction: fs.readFileSync(
      __dirname +
        '/../resources/assests/uploads/' +
        req.file.filename,
    ),
    userId: req.user.id,
  })
    .then((order) => res.redirect('/order-histori'))
    .catch((err) => console.log(err))
}

module.exports = { uploadTransaction }
