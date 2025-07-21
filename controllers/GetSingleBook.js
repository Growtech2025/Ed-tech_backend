
const Book = require('../modals/Booksmodal.js'); 
exports.getSingleBooks = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(200).json({
                message: "books id not found ",
                success: false,
            })
        }
        const singleBooksDetails = await Book.findById({ _id: id });
        if (!singleBooksDetails) {
            return res.status(400).json({
                message: `books id ${id} is not exist sorry no books found`,
                success: false,

            })
        }
        return res.status(200).json({
            message: "single books Feteched successfully",
            success: true,
            data: singleBooksDetails
        })
    }
    catch (error) {
        console.log("Getting an error in single Books controller" ,error);
        return res.status(500).json({
            message: "Internal server error in single books controller ",
            success: false
        })
    }


}