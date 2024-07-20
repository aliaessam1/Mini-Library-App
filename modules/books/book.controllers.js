import Book from "../../database/models/book.model.js";
import { appError, catchAsyncError } from "../../utils/error.js";

export const addBook = catchAsyncError(async (req, res) => {
  const { title, content, author, publishedDate } = req.body;
  const addedBook = await Book.create({
    title,
    content,
    author,
    publishedDate,
  });
  res.status(201).json({ message: "Book Added Successfully", addedBook });
});

export const getAllBooks = catchAsyncError(async (req, res) => {
  const book = await Book.find();
  res.json({ book });
});

export const getBookById = catchAsyncError(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  res.json({ book });
});

export const deleteBook = catchAsyncError(async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.bookId);
  res.status(200).json({ message: "Book Deleted Successfully" });
});

export const updateBook = catchAsyncError(async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Book Updated Successfully", book });
});
