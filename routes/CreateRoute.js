const express=require("express");
const router= express.Router();
const  {createBook}=require("../controllers/CreateBooks.js")
const  {createCourse}=require("../controllers/CreateCourse.js")
const  {createJob}=require("../controllers/CreateJobs.js")
const SignUp = require("../controllers/Signup.js")
const Login = require("../controllers/Login.js"); 
const VerifyAccount = require("../controllers/VerifyAccount.js");
const {UpdateBooks}=require("../controllers/UpdateBooks.js")
const {DeleteBooks}=require("../controllers/DeleteBooks.js")
const {deleteCourse}=require("../controllers/DeleteCourse.js")
const {updateCourse}=require("../controllers/UpdateCourse.js")
const {updateJob}=require("../controllers/UpdateJob.js")
const {deleteJob}=require("../controllers/DeleteJob.js")
const adminMiddleware=require("../middlewares/adminMiddleware.js")
const TeacherMiddleware=require("../middlewares/teacherMiddleware.js")
const StudentMiddleware=require("../middlewares/studentMiddleware.js")
router.post("/create-books",TeacherMiddleware,createBook)
router.post("/create-course",TeacherMiddleware,createCourse)
router.post("/create-job",adminMiddleware,createJob)
router.post("/signup",SignUp)
router.post("/login",Login)
router.post("/Verify",VerifyAccount)
router.put("/update-book/:bookId",TeacherMiddleware,UpdateBooks)
router.delete("/delete-book/:bookId",TeacherMiddleware,DeleteBooks)
router.put("/update-course/:courseId",TeacherMiddleware,updateCourse)
router.delete("/delete-course/:courseId",TeacherMiddleware,deleteCourse)
router.put("/update-job/:jobId",adminMiddleware,updateJob)
router.delete("/delete-job/:jobId",adminMiddleware,deleteJob)




module.exports=router