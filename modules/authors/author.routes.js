import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "./author.controllers.js";
import {
  checkAuthor,
  checkAllAuthors,
  checkBook,
} from "./author.middlewares.js";
const authorRouter = Router();

authorRouter
  .route("/")
  .get(checkAllAuthors, getAllAuthors)
  .post(checkBook, addAuthor);
authorRouter
  .route("/:authorId")
  .get(checkAuthor, getAuthorById)
  .patch(checkAuthor, updateAuthor)
  .delete(checkAuthor, deleteAuthor);

export default authorRouter;
