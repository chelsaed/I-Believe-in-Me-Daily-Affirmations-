const mongoose = require('mongoose')

const affirSchema = new mongoose.Schema({

  affirmation: {
    type: String,
    required: true
  },
  feelings: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', affirSchema)
// we need to change this example to our name maybe?