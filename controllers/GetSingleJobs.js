
const Jobs = require('../modals/Jobsmodal.js'); 
exports.getSingleJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(200).json({
                message: "job id not found ",
                success: false,
            })
        }
        const singleJobDetails = await Jobs.findById({ _id: id });
        if (!singleJobDetails) {
            return res.status(400).json({
                message: `jobs id ${id} is not exist sorry no jobs found`,
                success: false,

            })
        }
        return res.status(200).json({
            message: "single jobs Feteched successfully",
            success: true,
            data: singleJobDetails
        })
    }
    catch (error) {
        console.log("Getting an error in single jobs controller" ,error);
        return res.status(500).json({
            message: "Internal server error in single jobs controller ",
            success: false
        })
    }


}