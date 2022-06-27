const router = require('express').Router();
const passport = require('passport');



// The root route renders our only view
router.get('/', (req, res) => {
  res.send('<a href="/auth/google"Authenticate with Google</a>');
});

router.get('auth/google', 
  passport.authenticate('google', {scope: ['email', 'profile']})
);

router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect : '/protected',
    failureRedirect : '/auth/failure',
  })
);

router.get('/protected', (req, res) => {
  res.send('Hello!');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/protected',
    failureRedirect : '/auth/failure'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/affirmations');
});

module.exports = router;