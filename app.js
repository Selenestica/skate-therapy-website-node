const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
var session = require('express-session')

const VIEWS_PATH = path.join(__dirname, '/views')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', indexRouter)

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.listen(2800, () => {
  console.log("Server started on Port 3000, at " + Date())
})