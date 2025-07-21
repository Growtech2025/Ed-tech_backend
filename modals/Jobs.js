const mongoose = require("mongoose");
const Jobsschema = mongoose.Schema({
    title:{type:String,required:true,min:3,max:30},
    description:{type:String,required:true,min:30,max:500},
    category:{type:String,required:true},
    country:{type:String,required:true},
    city:{type:String,required:true},
    location:{type:String,required:true},
    salaryType:{type:String,required:true,enum:['Fixed','Ranged'],default:'Fixed'},
    fixedSalary:{type:Number},
    salaryTo:{type:Number},
    expired:{type:Boolean},
    jobPostedOn:{type:Date},
    // postedBy:{type:String,required:true,min:3,max:30},
    fresher:{type:Boolean,required:true,default:true},
    ctc:{type:String,required:true},
    Noticeperiod:{type:Number,min:0,max:30},

})
module.exports = mongoose.model("Jobs",Jobsschema)