var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobileno: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', PersonSchema);
