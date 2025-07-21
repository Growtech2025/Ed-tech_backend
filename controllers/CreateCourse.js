const Course = require('../modals/CourseModal.js');
const User = require("../modals")
// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDiscription,
      // instructor,
      // whatYouWillLearn,
      // courseContent,
      // ratingAndReviews,
      price,
      // thumbnail,
      // tagskills,
      // category,
      // studentsEnrolled,
      // instructions,
      // status,
      // level
    } = req.body;
    
    const LoginuserId = req.user.id;

    // Create the course document
    const course = await Course.create({
      courseName,
      courseDiscription,
      // instructor,
      // whatYouWillLearn,
      // courseContent,
      // ratingAndReviews,
      price,
      // thumbnail,
      // tagskills,
      // category,
      // studentsEnrolled,
      // instructions,
      // status,
      // level
    });

 await User.findByIdAndUpdate({ _id: LoginuserId }, { $push: { myCreatedCourses: courseEntry._id } })


    return res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course
    });

  } catch (error) {
    console.error('Error creating course:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create course',
    });
  }
};