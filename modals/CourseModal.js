const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({

    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
     instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
    whatYouWillLearn: { type: String, trim:true },
    courseContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section"
    }],
    ratingAndReviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RatingAndReview'
  }],
    price: { type: Number },
    thumbnail: { type: String },
    tagskills: { type: [String], required:true},
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    instructions: { type: [String] },
    status: { type: String, enum: ["Draft", "Published"], default: 'Draft' },
    createdAt: { type: Date, default: Date.now() },
    level: { type: String, enum: ["Beginner", "Intermidiate", "Advanced"], default: 'Beginner' },
})

module.exports = mongoose.model("Course", CourseSchema)
