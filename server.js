const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<p>The Middleware that handles just /</p>')
})
app.get('/users', function (req, res) {
  res.send('<p>The Middleware that handles just /users</p>')
})

app.listen(3000)