const mongoose = require('mongoose');

const additionalInfoSchema = new mongoose.Schema({
  gender: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: String,
    trim: true
  },
  about: {
    type: String,
    trim: true
  },
  contact: {
    type: Number
  },
  Linkedin: {
    type: String,
    trim: true
  },
  Github: {
    type: String,
    trim: true
  },
  personalWebsite: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('AdditionalInfo', additionalInfoSchema);
