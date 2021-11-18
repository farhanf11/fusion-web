const router = require('express').Router()
const path = require('path')

router.get('/album', (req, res) => res.sendFile(path.join(__dirname + '/../../public/album.html')))
router.get('/booking', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/booking.html')),
)
router.get('/dashboard-transaction-details', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/dashboard-transaction-details.html')),
)
router.get('/invoice', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/invoice.html')),
)
router.get('/login', (req, res) => res.sendFile(path.join(__dirname + '/../../public/login.html')))
router.get('/order-histori', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/order-histori.html')),
)
router.get('/register', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/register.html')),
)
router.get('/upload-bukti', (req, res) =>
  res.sendFile(path.join(__dirname + '/../../public/upload-bukti.html')),
)

module.exports = router
