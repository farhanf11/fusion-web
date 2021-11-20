const express = require('express')
const router = express.Router()
const {
  registerHandler,
  loginHandler,
  logoutHandler,
} = require('../../controllers/userController')

// Register a User
router.post('/register', registerHandler)

// Login user
router.post('/login', loginHandler)

// Logout user
router.get('/logout', logoutHandler)

module.exports = router
