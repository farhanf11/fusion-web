const multer = require('multer')
const path = require('path')

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb('Please upload an image')
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, '../resources/assests/uploads'),
    )
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const uploadImage = multer({
  storage: storage,
  fileFilter: imageFilter,
})
module.exports = uploadImage
