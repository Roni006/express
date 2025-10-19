const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [4, "Name must be atlest 4 character"],
    maxLength: [16, "Name must be at most 16 character"],
    required: [true, "name is require "]
  },
  email: {
    type: String,
    unique: [true, "Email already Exist"],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    enum: ['dhaka', 'khulna', 'rongpur'],
    required: true

  },
  phone: {
    type: String,
  },

},
  {
    timestamps: true,
  });

module.exports = mongoose.model('user', userSchema);
