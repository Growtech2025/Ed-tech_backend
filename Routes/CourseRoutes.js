const express = require("express");
const router = express.Router();
const {createCourse}=require("../controllers/CreateCourse.js")
const {getAllCourses}=require("../controllers/GetAllCourse.js")
const {getSingleCourse}=require("../controllers/GetSingleCourse.js")
router.get("/all-course",getAllCourses)
router.post("/createCourse",createCourse)
router.get("/single-course/:id",getSingleCourse)
module.exports = router;