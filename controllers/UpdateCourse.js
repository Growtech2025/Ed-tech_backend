const Course = require('../modals/CourseModal.js');

// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const updateData = req.body;

    if (!courseId || courseId.length !== 24) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing course ID',
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: updatedCourse,
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update course',
    });
  }
};
