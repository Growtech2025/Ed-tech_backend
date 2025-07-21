const Jobs = require("../modals/Jobs.js");
exports.CreateJobs = async(req,res)=>{
    try{
        const {title,description,category,country,city,location,salaryType,fixedSalary,salaryFrom,salaryTo,expired,jobPostedOn,PostedBy,fresher,ctc,noticeperiod} = req.body;
        if(title==="" && description === "" && category === "" && country==="" && city === "" && location === "" && salaryType === "" && fixedSalary === "" && salaryFrom === "" && salaryTo === "" && expired === "" && jobPostedOn === "" && PostedBy === "" && fresher === "" && ctc === "" && noticeperiod === ""){
            return res.status(400).json({
                message:"All field is mandatory",
                success:true
            })
        }

        // if(expired === true ){
            
        // }
        const mydata = await Jobs.create({title,description,category,country,city,location,salaryType,fixedSalary,salaryFrom,salaryTo,expired,jobPostedOn,PostedBy,fresher,ctc,noticeperiod});
        return res.status(200).json({
            message:"Successfully Created a Job",
            success:true,
            data:mydata
        })
    }
    catch(er){
        console.log("Error in CreateJobs controller",er);
        return res.status(500).json({
            message:"Error in CreateJobs controller",
            success:true
        })
    }
}
exports.GetJobs = async(req,res)=>{
    try{
        const {id}=req.params;
        console.log("this is id",id);
        if(id === ""){
            return res.status(400).json({
                message: "please enter id",
                success: false
            })
        }
        const isExist = await Jobs.findOne({_id:id});
        if(!isExist){
            return res.status(400).json({
                message: `This id is not registered with us`,
                success: false
            })
        }
        return res.status(200).json({
            message:"the Job data is below",
            success:true,
            data:isExist
        })
        
           
    }
    catch(er){
        console.log("error in delete Jobs..",er)
        return res.status(500).json({
            message: "Internal server error in  Delete  Jobs",
            success: false
        })
    }
}

exports.UpdateJob = async(req,res)=>{
    try{
        const {id}=req.params;
        console.log("this is id",id);
        if(id === ""){
            return res.status(400).json({
                message: "please enter id",
                success: false
            })
        }
        const isExist = await Jobs.findByIdAndUpdate({_id:id});
        if(!isExist){
            return res.status(400).json({
                message: `This id is not registered with us`,
                success: false
            })
        }
        return res.status(200).json({
            message:"the Job data is below",
            success:true,
            data:isExist
        })
        
           
    }
    catch(er){
        console.log("error in delete Jobs..",er)
        return res.status(500).json({
            message: "Internal server error in  Delete  Jobs",
            success: false
        })
    }
}
exports.DeleteJobs = async (req,res)=>{
    try{
        const {id}=req.params;
        console.log("this is id",id);
        if(id === ""){
            return res.status(400).json({
                message: "please enter id",
                success: false
            })
        }
        // const isExist = await Jobs.findOne({_id:id});
        // if(!isExist){
        //     return res.status(400).json({
        //         message: `This id is not registered with us`,
        //         success: false
        //     })
        // }

        await Jobs.findByIdAndDelete({_id:id});

        
            return res.status(200).json({
                message: "Jobs deleted successfully",
                success: true,
            })
    }
    catch(er){
        console.log("error in delete Jobs..",er)
        return res.status(500).json({
            message: "Internal server error in  Delete  Jobs",
            success: false
        })
    }
}