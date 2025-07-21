const Course = require('../modals/CourseModal.js');

// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!courseId || courseId.length !== 24) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing course ID',
      });
    }

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course deleted successfully',
      data: deletedCourse,
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete course',
    });
  }
};
