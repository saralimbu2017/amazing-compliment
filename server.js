const express = require('express')
const app = express() 
const _= require('underscore')

app.set('view engine', 'ejs')
// app.use(logger)
//||
//\/
app.use(express.static('public')) 
//||
//\/
//routing
app.get('/',(req,res) => {
  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var randomCompliment = _.sample(compliments)
  
  res.render('home',{
    compliment: `${randomCompliment}`,
    color:`${_.sample(colors)}`})
})

app.get('/:name',(req,res) => {
  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var randomCompliment = _.sample(compliments)
  
  res.render('user',{
    compliment: `${randomCompliment}`,
    color:`${_.sample(colors)}`,
    name: `${req.params.name}`})
})


//||
//\/

//||
//404 error
app.listen(8080, () => {
  console.log('listening  on 8080')
})
