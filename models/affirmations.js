const mongoose = require('mongoose')

const affirSchema = new mongoose.Schema({

  affirmation: {
    type: String,
    required: true
  },
  feelings: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', affirSchema)
// we need to change this example to our name maybe?