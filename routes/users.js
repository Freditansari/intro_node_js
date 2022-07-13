const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
router.get('/',(req, res)=>{
    res.json({message: "routes is available"})
})

router.post('/register',(req, res)=>{
    console.log(req.body)
    User.findOne({ email: req.body.email })
    .then(user =>{
        if(user){
            return res.status(400).json({error: "Email has been registered."})
        }else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              });
            
            //   adding salt to password
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
              });
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router;