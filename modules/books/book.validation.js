import Joi from "joi";

export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  publishedDate: Joi.date(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  author: Joi.string().optional(),
  publishedDate: Joi.date().optional(),
});


export const deleteBookSchema = Joi.object({
  bookId: Joi.string().length(24).hex().required(),
});
