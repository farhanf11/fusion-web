const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

// Logger
// app.use(morgan('dev'))

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static folder
app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/views/index'))

// API Routes
app.post('/order', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => console.log('Server running on port 3000...'))
