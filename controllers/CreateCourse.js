const Course = require('../modals/CourseModal.js'); 

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      instructor,
      whatYouWillLearn,
      courseContent,
      ratingAndReviews,
      price,
      thumbnail,
      tagskills,
      category,
      studentsEnrolled,
      instructions,
      status,
      level
    } = req.body;

    // Create the course document
    const course =await Course.create({
      courseName,
      courseDescription,
      instructor,
      whatYouWillLearn,
      courseContent,
      ratingAndReviews,
      price,
      thumbnail,
      tagskills,
      category,
      studentsEnrolled,
      instructions,
      status,
      level
    });


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