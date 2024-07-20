import Author from "../../database/models/author.model.js";
import Book from "../../database/models/book.model.js";
import { appError } from "../../utils/error.js";

export const checkAuthor = async (req, res, next) => {
  const author = await Author.findById(req.params.authorId);

  if (!author) return next(new appError("No Author Found", 404));

  next();
};

export const checkAllAuthors = async (req, res, next) => {
  const authors = await Author.find();

  if (authors.length === 0) return next(new appError("No Authors Found", 404));

  next();
};

export const checkBook = async (req, res, next) => {
  const { books } = req.body;

  if (!Array.isArray(books)) {
    return next(new appError("Books should be an array", 400));
  }

  if (books.length === 0) return next();

  const existingBooks = await Book.find({ _id: { $in: books } });

  if (existingBooks.length !== books.length) {
    return next(new appError("One or more books are not valid", 400));
  }

  const book = await Author.find({
    books: { $in: books },
  });

  if (book.length > 0) {
    return next(
      new appError("One or more books are already assigned to an author", 409)
    );
  }

  next();
};
