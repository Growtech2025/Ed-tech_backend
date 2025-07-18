const express=require("express");
const router= express.Router();
const  {createBook}=require("../controllers/CreateBooks.js")
const  {createCourse}=require("../controllers/CreateCourse.js")
const  {createJob}=require("../controllers/CreateJobs.js")

router.post("/create-books",createBook)
router.post("/create-course",createCourse)
router.post("/create-job",createJob)


module.exports=router