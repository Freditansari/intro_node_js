const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

let users = [{name: "Joe", age: 34}, {name: "Susan", age: 40}]
app.get('/', (req, res) => {

    res.render('pages/index', {users})
})

app.get('/data', (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})