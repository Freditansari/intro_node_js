const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

const db = require('./configs/mongodb').mongoURI;
mongoose.connect(db)
.then(()=>console.log('Monggo db connected')).catch(err=>console.log(err));


app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/data', (req, res) => {
  let user = [{user: "Joe", age: 34}, {user: "Susan", age: 40}]
  res.json(user)
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})