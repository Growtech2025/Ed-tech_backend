const Book = require('../modals/Booksmodal.js'); 

// Book create
exports.createBook = async (req, res) => {
  try {
    const {
      BookName,
      BookDescription,
      ratingAndReviews,
      price,
      // Bookthumbnail,
      // category,
      // studentsEnrolled,
      // instructions,
      // status
    } = req.body;
const LoginuserId=req.user.id
    const book = await Book.create({
      BookName,
      BookDescription,
      ratingAndReviews,
      price,
      // Bookthumbnail,
      // category,
      // studentsEnrolled,
      // instructions,
      // status
    });
  await User.findByIdInUpdate({_id:id},{$push:{myCreatedBooks:book.id}})
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