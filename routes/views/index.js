const router = require('express').Router()
const path = require('path')
const { isAuth } = require('../../middleware/auth')

router.get('', isAuth, (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/index.html'),
  ),
)
router.get('/album', isAuth, (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/album.html'),
  ),
)
router.get('/booking', isAuth, (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/booking.html'),
  ),
)
router.get(
  '/dashboard-transaction-details',
  isAuth,
  (req, res) =>
    res.sendFile(
      path.join(
        __dirname +
          '/../../public/dashboard-transaction-details.html',
      ),
    ),
)
router.get('/invoice', isAuth, (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/invoice.html'),
  ),
)
router.get('/login', (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/login.html'),
  ),
)
router.get('/order-histori', isAuth, (req, res) =>
  res.sendFile(
    path.join(
      __dirname + '/../../public/order-histori.html',
    ),
  ),
)
router.get('/register', (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../../public/register.html'),
  ),
)
router.get('/upload-bukti', isAuth, (req, res) =>
  res.sendFile(
    path.join(
      __dirname + '/../../public/upload-bukti.html',
    ),
  ),
)

module.exports = router
