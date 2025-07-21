const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDiscription: { type: String, required: true },
    // courseAuthor: { type: String },
    price: { type: Number, required: true }
})
module.exports = mongoose.model("Course",CourseSchema )