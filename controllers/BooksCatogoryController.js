const BooksCatagorymodal = require("../modals/BooksCatagory.js")
exports.BooksCategory = async(req,res)=>{
    try{
        const {name,description} = req.body;
        console.log("request data:- ",name,description);

        const mybookscatogory = await BooksCatagorymodal.create({name,description});
        return res.status(200).json({
            message:"Successfully catagorized",
            success:true,
            data:mybookscatogory
        })
    }
    catch(er){
        console.log("Error in CourseCatogory",er);
        return res.status(500).json({
            message:"Error in Books",
            success:false,
        })
    }
}