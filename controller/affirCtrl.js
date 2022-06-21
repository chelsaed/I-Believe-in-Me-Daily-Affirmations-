var Affir = require('../models/affirmations');

module.exports = {
  index,
  show,
  new: newAffir,
  create
};

function index(req, res) {
  Affir.find({}, function(err, allAffir) {
    res.render('index.ejs', {allAffir}); //on index.ejs use affrimation 
  });
}

function show(req, res) {
  Affir.findById(req.params.id, function(err, affirmation) {
    res.render('affirPage', {affirmation});
  });
}

function newAffir(req, res) {
  res.render('affirPage')
}


function create(req, res) {
    console.log('I am great!')
        const affirmations = new Affir(req.body);
        affirmations.save(function(err) {
          if (err) {
              console.log(err)
            return res.redirect('/affirmations/new');
          }
          console.log(affirmations);
          // for now, redirect right back to new.ejs
          res.redirect('/affirmations');
        });
      }
