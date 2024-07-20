import Book from "../../database/models/book.model.js";
import { appError } from "../../utils/error.js";

export const checkBook = async (req, res, next) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) return next(new appError("No Book Found", 404));

  next();
};

export const checkAllBooks = async (req, res, next) => {
  const book = await Book.find();
  if (!book) return next(new appError("No Books Found", 400));

  next();
};

export const checkTitle = async (req, res, next) => {
  const { title } = req.body;
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    return next(new appError("Book Already Exists with the Same Title", 400));
  }

  next();
};
