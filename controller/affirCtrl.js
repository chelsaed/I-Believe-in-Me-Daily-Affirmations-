const Affir = require('../models/affirmations');

module.exports = {
  index,
  show,
  new: newAffir,
//   create
};

function index(req, res) {
  Affir.find({}, function(err, affirmation) {
    res.render('index.ejs', {affirmation}); //on index.ejs use affrimation 
  });
}

function show(req, res) {
  Affir.findById(req.params.id, function(err, affirmation) {
    res.render('affirmations/show', {affirmation});
  });
}

function newAffir(req, res) {
  res.render('affirmations/new', {affirmation})


// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   // remove whitespace next to commas
//   req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   // split if it's not an empty string
//   if (req.body.cast) req.body.cast = req.body.cast.split(',');
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   const movie = new Movie(req.body);
//   movie.save(function(err) {
//     // one way to handle errors
//     if (err) return res.redirect('/movies/new');
//     console.log(movie);
//     // for now, redirect right back to new.ejs
//     res.redirect('/movies');
//   });
}