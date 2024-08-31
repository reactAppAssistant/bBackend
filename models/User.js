const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isLoggedIn: { type: Boolean, default: false },  // Add isLoggedIn field
});

module.exports = mongoose.model('User', userSchema);
