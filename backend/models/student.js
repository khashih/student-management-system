const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: String,
  password: String,
});

module.exports = mongoose.model('student', userSchema);
