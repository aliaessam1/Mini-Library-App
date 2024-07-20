import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/libraryApp")
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });
