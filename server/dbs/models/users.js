const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
})

const user = Mongoose.model('user',UserSchema)

module.exports = user;
