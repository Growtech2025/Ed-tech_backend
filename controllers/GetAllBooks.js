const Book = require('../modals/Booksmodal.js'); 
exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        return res.status(200).json({
            message: " All bookss Feteched successfully",
            success: true,
            data: allBooks
        })
    }
    catch (error) {
        console.log("Getting an error in All Books controller");
        return res.status(500).json({
            message: "Internal server error in All Books controller ",
            success: false
        })
    }

}