const User = require('../models/User')
const Order = require('../models/Order')
const fs = require('fs')

const uploadTransaction = (req, res) => {
  User.hasMany(Order, { foreignKey: 'id' })
  Order.belongsTo(User)

  if (!req.file) {
    res.status(400).redirect('/upload-bukti')
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

const getOrders = (req, res) => {
  const { id } = req.user

  Order.findAll({ where: { userId: id } })
    .then((result) =>
      res.json({ success: true, data: result }),
    )
    .catch((err) => res.json({ success: false, err }))
}

module.exports = { uploadTransaction, getOrders }
