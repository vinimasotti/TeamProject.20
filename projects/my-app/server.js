const express = require('express')
const app = express ()


app.set('view-engine', 'ejs')

//set up a router
app.get('/', (req, res) => {
  res.render('index.ejs', {name: 'Kyle' }) //testing index.ejs
})


//app.get('/login', (req, res) => )
//}) https://www.youtube.com/watch?v=-RCnNyD0L-s&t=880s

app.get('/login', (req,res) => {
  res.render('login.ejs')
})

app.get('/register', (req,res) => {
  res.render('register.ejs')
})

app.post('/register',(req, res)=> {

})
app.listen(3000)