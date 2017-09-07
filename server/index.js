const express = require('express')
const bodyParser = require('body-parser')
const route = require('./api/index.js')

const app = express()

app.set('port', process.env.port || 4000)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app)

app.listen(app.get('port'), () =>
  console.log('Server is at http://localhost:4000')
)
