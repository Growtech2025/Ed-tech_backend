const mongoose = require('mongoose');

const booksCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  books: [{  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }]
});

module.exports = mongoose.model('BooksCategory', booksCategorySchema);
