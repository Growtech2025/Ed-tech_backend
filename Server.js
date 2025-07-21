const express = require("express");
require("dotenv").config();
const DatabaseConnect= require("./config/DataBase.js")
const BookRoutes=require("./Routes/BookRoutes.js");
const CourseRoutes=require("./Routes/CourseRoutes.js")
const JobsRoutes=require("./Routes/JobsRoutes.js")
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server ruinning at ${PORT}`)
})
DatabaseConnect();
app.use(express.json());

app.use("/books/api/v1",BookRoutes)
app.use("/course/api/v1",CourseRoutes)
app.use("/job/api/v1",JobsRoutes)


app.get("/", (req, res) => {
    res.send("home page ")
})