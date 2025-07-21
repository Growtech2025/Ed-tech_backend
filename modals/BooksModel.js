const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  BookName: {
    type: String,
    trim: true
  },
  BookDescription: {
    type: String,
    trim: true
  },
  ratingAndReviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RatingAndReview'
  }],
  price: {
    type: Number
  },
  Bookthumbnail: {
    type: String 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  instructions: [String],
  status: {
    type: String,
    enum: ['Draft', 'Published'],
    default: 'Draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);