const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const path = require('path')
const port = 3000
const mongoose = require('mongoose')
const passport = require('passport')

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use('/public', express.static(path.join(__dirname, 'public')))
const users = require('./routes/users');
const home = require('./routes/home');


// todo explain body parser
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

// connect to mongodb
const db = require('./config/mongodb').mongoURI;
mongoose.connect(db)
.then(()=>console.log('Mongodb connected'))
.catch(err=>console.log(err));

// configure passport
require('./config/passport')(passport);
// start passport
app.use(passport.initialize());


app.use('/api/users', users);
app.use('/', home);
app.get('/', (req, res) => {

    res.render('pages/index');
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})