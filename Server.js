const express = require("express");
const app = express();
require("dotenv").config();
const Database = require("./config/Database.js")
const port = process.env.PORT;
const AuthRoutes = require("./routes/AuthRoutes.js");
const JobRoutes = require("./routes/JobRoutes.js")
const CatagorizeRoutes = require("./routes/CatagorizeRoutes.js")

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
Database();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/auth",AuthRoutes);
app.use("/routes",JobRoutes);
app.use("/catagorize",CatagorizeRoutes);
