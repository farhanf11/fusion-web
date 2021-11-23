const express = require('express')
const router = express.Router()
const uploadImage = require('../../middleware/uploadImage')
const {
  uploadTransaction,
  getOrders,
} = require('../../controllers/orderController')

router.post(
  '/upload-transaction',
  uploadImage.single('uploadTransaction'),
  uploadTransaction,
)

router.get('/order-history', getOrders)

module.exports = router
