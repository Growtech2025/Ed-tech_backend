const express=require("express");
const router= express.Router();
const  {createBook}=require("../controllers/CreateBooks.js")
const  {createCourse}=require("../controllers/CreateCourse.js")
const  {createJob}=require("../controllers/CreateJobs.js")
const SignUp = require("../controllers/Signup.js")
const Login = require("../controllers/Login.js"); 
const ResetPassword = require("../controllers/ResetPassword.js");
const ResendOtp = require("../controllers/ResendOtp.js");
const VerifyAccount = require("../controllers/VerifyAccount.js");


router.post("/create-books",createBook)
router.post("/create-course",createCourse)
router.post("/create-job",createJob)
router.post("/signup",SignUp)
router.post("/login",Login)
router.post("/ResetPassword",ResetPassword)
router.post("/ResendOtp",ResendOtp)
router.post("/Verify",VerifyAccount)



module.exports=router