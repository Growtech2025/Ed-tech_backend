const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
     title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true }
})
module.exports = mongoose.model("Jobs",jobSchema )