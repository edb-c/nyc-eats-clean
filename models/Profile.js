const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  //Reference to ID in User Model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
