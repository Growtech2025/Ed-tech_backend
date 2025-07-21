const Course = require('../modals/CourseModal.js'); 

exports.getSingleCourse = async (req, res) => {
    try {
        
        const { id } = req.params;
        console.log("course id", id)
        if (!id) {
            return res.status(200).json({
                message: "course id not found ",
                success: false,
            })
        }
        const singleCourseDetails = await Course.findById({ _id: id });
        if (!singleCourseDetails) {
            return res.status(400).json({
                message: `Course id ${id} is not exist sorry no course found`,
                success: false,

            })
        }
        return res.status(200).json({
            message: "single Course Feteched successfully",
            success: true,
            data: singleCourseDetails
        })
    }
    catch (error) {
        console.log("Getting an error in single course controller",error);
        return res.status(500).json({
            message: "Internal server error in single course controller ",
            success: false
        })
    }
}
