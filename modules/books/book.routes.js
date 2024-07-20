import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controllers.js";
import { checkTitle, checkBook, checkAllBooks } from "./book.middleware.js";
import validate from "../../middlewares/validation.middleware.js";
import {
  addBookSchema,
  deleteBookSchema,
  updateBookSchema,
} from "./book.validation.js";

const bookRouter = Router();

bookRouter
  .route("/")
  .get(checkAllBooks, getAllBooks)
  .post(validate(addBookSchema), checkTitle, addBook);
bookRouter
  .route("/:bookId")
  .get(checkBook, getBookById)
  .patch(validate(updateBookSchema), checkBook, updateBook)
  .delete(validate(deleteBookSchema), checkBook, deleteBook);

export default bookRouter;
