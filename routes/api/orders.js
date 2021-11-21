const express = require('express')
const router = express.Router()
const uploadImage = require('../../middleware/uploadImage')
const {
  uploadTransaction,
} = require('../../controllers/orderController')

router.post(
  '/upload-transaction',
  uploadImage.single('uploadTransaction'),
  uploadTransaction,
)

module.exports = router
