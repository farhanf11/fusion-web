const express = require('express')

const app = express()

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Static folder
app.use(express.static('views'))

app.listen(3000)
