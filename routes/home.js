const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {

    res.render('pages/home')

  });

router.get('/homeContent', (req, res) => {
    let content = `
    <h3>This is the content</h3>`

    let result = {
        result : content
    }

    res.json(result)
  });

module.exports = router;