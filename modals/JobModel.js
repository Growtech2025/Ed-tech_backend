const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 500,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  salaryType: {
    type: String,
    enum: ['Fixed Salary', 'Ranged Salary']
  },
  fixedSalary: {
    type: Number,
   
  },
  salaryFrom: {
    type: Number,
    
  },
  salaryTo: {
    type: Number,
    
  },
  expired: {
    type: Boolean,
    default: false
  },
  jobPostedOn: {
    type: Date,
    default: Date.now()
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isExperience: {
    type: Boolean,
    required: true
  },
  CTC: {
    type: Number,
    required: true
  },
  noticePeriod: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Job', jobSchema);
