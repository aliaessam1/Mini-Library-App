import Joi from "joi";

export const addAuthorSchema = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string().optional(),
  birthDate: Joi.date().iso().optional(),
  books: Joi.array().items(Joi.string().length(24).hex()),
});

export const updateAuthorSchema = Joi.object({
  name: Joi.string().optional(),
  bio: Joi.string().optional(),
  birthDate: Joi.date().iso().optional(),
  books: Joi.array().items(Joi.string().length(24).hex()).optional(),
});

export const deleteAuthorSchema = Joi.object({
  authorId: Joi.string().length(24).hex().required(), 
});
