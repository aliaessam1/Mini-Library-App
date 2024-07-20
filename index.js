import express from "express";
import "./database/dbConn.js";
import { appError } from "./utils/error.js";
import authorRouter from "./modules/authors/author.routes.js";
import bookRouter from "./modules/books/book.routes.js";

const app = express();

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());

process.on("uncaughtException", () => console.log("Error"));

app.use(express.json());
app.use("/author", authorRouter);
app.use("/book", bookRouter);

app.use("*", (req, res, next) => {
  next(new appError(req.originalUrl + "Not Found", 404));
});

app.use((err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({ message });
});

process.on("unhandledRejection", () => console.log("Error"));
