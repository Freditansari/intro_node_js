const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.use(express.static('public'))
const users = require('./routes/users');

// todo connect to mongodb 

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());


const db = require('./config/mongodb').mongoURI;
mongoose.connect(db)
.then(()=>console.log('Monggo db connected')).catch(err=>console.log(err));

// let users = [{name: "Joe", age: 34}, {name: "Susan", age: 40}]

app.use('/api/users', users);
// app.get('/', (req, res) => {

//     res.render('pages/index', {users})
// })

// app.get('/data', (req, res) => {
//   res.json(users)
// })

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})