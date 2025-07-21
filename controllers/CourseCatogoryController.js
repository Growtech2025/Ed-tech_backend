const CourseCategorymodal = require("../modals/CourseCatagory.js")
exports.CourseCategory = async(req,res)=>{
    try{
        const {name,description} = req.body;
        // console.log("request data:- ",name,description);

        const mycoursecatogory = await CourseCategorymodal.create({name,description});
        return res.status(200).json({
            message:"Successfully catagorized",
            success:true,
            data:mycoursecatogory
        })
    }
    catch(er){
        console.log("Error in CourseCatogory",er);
        return res.status(500).json({
            message:"Error in CourseCatogory",
            success:false,
        })
    }
}