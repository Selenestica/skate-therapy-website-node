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

/*
let myButton = document.querySelector('#user');
let myHeading = document.querySelector('#username');

function setUserName() {
  let myName = prompt("Welcome! What's your name?");
  if(!myName || myName === null) {
	setUserName();
  } else {
  	localStorage.setItem('name', myName);
 	myHeading.textContent = 'Hey, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}

let myImage = document.querySelector('#group-photo');
myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
   let BackgroundImg = myImage.getAttribute('class');
   if(mySrc === 'file:///Users/jbwilson/Downloads/Skate-Therapy-Website-master/sk8-therapy-test-site/images-copy/skate-therapy-image.jpg') {
       myImage.setAttribute('src', 'file:///Users/jbwilson/Downloads/benjamin-photo.JPG');
   } else {
       myImage.setAttribute('src', 'file:///Users/jbwilson/Downloads/Skate-Therapy-Website-master/sk8-therapy-test-site/images-copy/skate-therapy-image.jpg');
   }
}
*/

app.listen(3000, () => {
  console.log("Server started on Port 3000, at " + Date())
})