const Course = require('../modals/CourseModal.js'); 
exports.getAllCourses = async (req, res) => {
    try {
        const allCourse = await Course.find({});
        return res.status(200).json({
            message: " All Courses Feteched successfully",
            success: true,
            data: allCourse
        })
    }
    catch (error) {
        console.log("Getting an error in All courses controller",error);
        return res.status(500).json({
            message: "Internal server error in All courses controller ",
            success: false
        })
    }
}