const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userCtrl')
const passport = require('passport')
const GoogleStrategy= require('passport-google-oauth').Strategy

passport.use(new GoogleStrategy({
  consumerKey: process.env.GOOGLE_CLIENT_ID, 
  consumerSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK,
  passReqToCallback: true
},
function (req, accessToken, refreshToken, profile, done){
  return done(err, profile);
}))

router.get('/', function(req, res, next) {
    res.redirect('/affirmations');
  });
  

  
  module.exports = router;