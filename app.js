const express = require('express')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const passportConfig = require('./config/passport')

const app = express()

// DB connection
const sequelize = require('./config/connection')
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err))

// Logger
// app.use(morgan('dev'))

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Static folder
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/css'))

// Session
app.use(
  session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  }),
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Views Routes
app.use('/', require('./routes/views/index'))

// API Routes
app.use('/api', require('./routes/api/users'))
app.use('/api/order', require('./routes/api/orders'))

app.listen(3000, () =>
  console.log('Server running on port 3000...'),
)
