const Book = require('../modals/BooksModel.js'); 

// Book create
exports.createBook = async (req, res) => {
  try {
    const {
      BookName,
      BookDescription,
      ratingAndReviews,
      price,
      Bookthumbnail,
      category,
      studentsEnrolled,
      instructions,
      status
    } = req.body;

    const book = await Book.create({
      BookName,
      BookDescription,
      ratingAndReviews,
      price,
      Bookthumbnail,
      category,
      studentsEnrolled,
      instructions,
      status
    });

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book
    });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create book',
    });
  }
};
