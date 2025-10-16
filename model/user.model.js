const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emial: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    enum: ['Dhaka', 'Khulna', 'Rongpur'],
    required: true
  },
  addresss: {
    type: String,

  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model('user', userSchema);
