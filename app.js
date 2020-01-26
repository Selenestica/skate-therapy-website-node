//Variable Set-Up
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/views')
const mustacheExpress = require('mustache-express')

//========== express-session ========
const session = require('express-session')

app.use(bodyParser.urlencoded({extended: false}))

//Routes
const donateRouter = require('./routes/donate')
app.use('/donate', donateRouter)

const volunteerRouter = require('./routes/volunteer')
app.use('/volunteer', volunteerRouter)

const enrollRouter = require('./routes/enroll')
app.use('/enroll', enrollRouter)

const sponsorRouter = require('./routes/sponsor')
app.use('sponsor', sponsorRouter)

const galleryRouter = require('./routes/gallery')
app.use('gallery', galleryRouter)

//Home
app.get('/', (req, res) => {
  res.render('index')
})

//Donate Page
app.get('/donate', (req, res) => {
  res.render('donate')
})

app.get('/volunteer', (req, res) => {
  res.render('volunteer')
})

app.get('/enroll', (req, res) => {
  res.render('enroll')
})

app.get('/sponsor', (req, res) => {
  res.render('sponsor')
})

app.get('/gallery', (req, res) => {
  res.render('gallery')
})


//Mustache
app.use(express.static(path.join(__dirname, 'partials')))
app.use(express.static(path.join(__dirname, '/public')))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', './views')
app.set('view engine', 'mustache')

app.listen(2800, () => {
  console.log("Server started on Port 2800, at " + Date())
})