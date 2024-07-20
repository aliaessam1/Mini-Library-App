import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controllers.js";
import { checkTitle, checkBook, checkAllBooks } from "./book.middleware.js";

const bookRouter = Router();

bookRouter.route("/").get(checkAllBooks, getAllBooks).post(checkTitle, addBook);
bookRouter
  .route("/:bookId")
  .get(checkBook, getBookById)
  .patch(checkBook, updateBook)
  .delete(checkBook, deleteBook);

export default bookRouter;
