const mongoose = require("mongoose");
require("dotenv").config();
function DataBaseConnection() {
    try{
    mongoose.connect(process.env.DBURL, {})
    .then(() => console.log("DataBase Connection Successfully"))
    .catch((error) => console.log("Error in DB Connection", error))
    }
    catch(error){
        console.log("Internal Server Error in Database Connection",error)
    }
}
module.exports = DataBaseConnection;