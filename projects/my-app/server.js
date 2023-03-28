const express = require('express')
const app = express ()
const bcrypt = require('bcrypt')
const passport = require ('passport')


const initializePassport = require('./passport-config')initializePassport(passport)

const users = []  //then connect to a database

//npm i bcrypt installed

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))

//set up a router
app.get('/', (req, res) => {
  res.render('index.ejs', {name: 'Kyle' }) //testing index.ejs
})


//app.get('/login', (req, res) => )
//}) https://www.youtube.com/watch?v=-RCnNyD0L-s&t=880s

app.get('/login', (req,res) => {
  res.render('login.ejs')
})

app.post('/login', (req,res) => {

})

app.get('/register', (req,res) => {
  res.render('register.ejs')
})

app.post('/register',async (req, res)=> {
  try {
    const hashedPassword =  await bcrypt.hash(req.body.password, 10 ) //security reasons
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  }catch{
    res.redirect('/register')
  }
  console.log(users)
  
})
app.listen(3000)