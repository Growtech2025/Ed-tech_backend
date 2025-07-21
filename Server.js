const express = require("express");
const DataBaseConnection = require("./configuration/DataBaseConnection.js");
const CreateRoute = require("./routes/CreateRoute.js");
const app = express();


app.use(express.json()); 

app.use("/create", CreateRoute);

DataBaseConnection();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Home page my task delete,update course,book and jobs and adding middlewares");
});