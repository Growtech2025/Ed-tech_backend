const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    approved: { type: Boolean, default: true },
    image: { type: String, required: true },
    additionalDetails: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile"
        }

    ],
    otp: { type: String },
    verifyAccount: { type: Boolean, default: false },
    courseProgress: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress"
    }],
    myEnrollCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    myCreatedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    myCreatedBooks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Books"
        }
    ],
    myPurchaseBooks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Books"
        }
    ],
    accountType: { type: String, enum: ["student", "teacher", "admin"], default: "student" }
})

module.exports = mongoose.model("User", UserSchema)

