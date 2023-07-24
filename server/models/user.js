// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  savedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

