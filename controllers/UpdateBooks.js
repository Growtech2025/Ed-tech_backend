const Book = require('../modals/BooksModel.js'); 

// Update Book
exports.UpdateBooks = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updateData = req.body;

    if (!bookId) {
      return res.status(400).json({
        success: false,
        message: 'Book ID is required',
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update book'
    });
  }
};
