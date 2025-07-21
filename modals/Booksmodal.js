const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    BookDescription: { type: String, required: true },
    ratingAndReviews: { type: String },
    price: { type: Number, required: true },
})
module.exports = mongoose.model("Book", bookSchema)
