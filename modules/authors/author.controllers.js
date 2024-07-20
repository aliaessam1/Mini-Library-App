import Author from "../../database/models/author.model.js";
import { catchAsyncError } from "../../utils/error.js";

export const addAuthor = catchAsyncError(async (req, res) => {
  const { name, bio, birthDate, books } = req.body;

  const author = await Author.create({
    name,
    bio,
    birthDate,
    books,
  });

  res.status(201).json({ message: "Author Added Successfully", author });
});

export const getAllAuthors = catchAsyncError(async (req, res) => {
  const authors = await Author.find().select("name -_id");

  res.json({ authors });
});

export const getAuthorById = catchAsyncError(async (req, res) => {
  const author = await Author.findById(req.params.authorId).select("name -_id");

  res.json({ author });
});

export const deleteAuthor = catchAsyncError(async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.authorId);

  res.status(200).json({ message: "Deleted Successfully", author });
});

export const updateAuthor = catchAsyncError(async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.authorId, req.body, {
    new: true,
  });

  res.status(200).json({ message: "Updated Successfully", author });
});
