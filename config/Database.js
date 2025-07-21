const mongoose = require("mongoose");
require("dotenv").config();
function Database(){
    try{
        mongoose.connect(process.env.URL,{}).then(i=>console.log("succesfully connected to Database.")).catch((er)=>{
            console.log("Getting an Error while connecting with db");
            throw("error in connecting")
        })
    }
    catch(er){
        console.log("Getting error in db connection",er);
    }
}
module.exports = Database;