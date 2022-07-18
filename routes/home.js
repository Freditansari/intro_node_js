const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/home', (req, res) => {

    res.render('pages/home')

  });

router.get('/homeContent', passport.authenticate('jwt', { session: false }), (req, res) => {
    let content = `
    <h3>This is the secure content</h3>`

    let result = {
        result : content
    }

    res.json(result)
  });

module.exports = router;