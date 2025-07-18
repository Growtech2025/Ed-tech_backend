const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  approved: {
    type: Boolean,
    default: true
  },
  accountType: {
    type: String,
    enum: ['Student', 'Admin', 'Instructor', 'Seller'], 
    required: true
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }],
  image: {
    type: String,
    required: true
  },
  courseProgress: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseProgress'
  }],
  resetPasswordExpires: {
    type: Date
  },
  token: {
    type: String
  }
});

module.exports = mongoose.model('Seller', sellerSchema);
