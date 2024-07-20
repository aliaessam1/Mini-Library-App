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
import {
  addAuthorSchema,
  deleteAuthorSchema,
  updateAuthorSchema,
} from "./author.validations.js";
const authorRouter = Router();
import validate from "../../middlewares/validation.middleware.js";

authorRouter
  .route("/")
  .get(checkAllAuthors, getAllAuthors)
  .post(validate(addAuthorSchema), checkBook, addAuthor);
authorRouter
  .route("/:authorId")
  .get(checkAuthor, getAuthorById)
  .patch(validate(updateAuthorSchema), checkAuthor, updateAuthor)
  .delete(validate(deleteAuthorSchema), checkAuthor, deleteAuthor);

export default authorRouter;
