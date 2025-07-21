const Jobs = require('../modals/Jobsmodal.js'); 
exports.getAllJobs = async (req, res) => {
    try {
        const allJobs = await Jobs.find({});
        return res.status(200).json({
            message: " All bookss Feteched successfully",
            success: true,
            data: allJobs
        })
    }
    catch (error) {
        console.log("Getting an error in All job controller",error);
        return res.status(500).json({
            message: "Internal server error in jobs controller ",
            success: false
        })
    }

}