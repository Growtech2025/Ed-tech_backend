const express = require("express");
const router = express.Router();
const {createJob}=require("../controllers/CreateJob.js")
const {getAllJobs}=require("../controllers/GetAllJobs.js")
const{getSingleJob}=require("../controllers/GetSingleJobs.js")
router.post("/cretejobs",createJob)
router.get("/all-jobs",getAllJobs)
router.get("/single-jobs/:id",getSingleJob)
module.exports = router;