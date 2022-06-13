const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userCtrl')

router.get('/', function(req, res, next) {
    res.redirect('/affirmations');
  });
  

  
  module.exports = router;