import mongoose from "mongoose";

const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});

const Author = mongoose.model("author", authorSchema);

export default Author;
