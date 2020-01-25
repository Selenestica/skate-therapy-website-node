const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/views')
const mustacheExpress = require('mustache-express')

const session = require('express-session')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static(path.join(__dirname, 'partials')))
app.use(express.static(path.join(__dirname, '/public')))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', './views')
app.set('view engine', 'mustache')

app.listen(2800, () => {
  console.log("Server started on Port 2800, at " + Date())
})