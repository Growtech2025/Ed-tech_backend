const express = require("express");
const router = express.Router();
const {createBook}=require("../controllers/CreateBook.js")
const {getAllBooks}=require("../controllers/GetAllBooks")
const {getSingleBooks}=require("../controllers/GetSingleBook")
router.post("/crateBooks",createBook)
router.get("/single-books/:id",getSingleBooks)
router.get("/allbooks",getAllBooks)
module.exports = router;