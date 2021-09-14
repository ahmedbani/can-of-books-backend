"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schema = require("./booksSchema");

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.use(express.json());

//mongo DB

schema.main().catch((err) => console.log(err));

//Routes
app.get("/books", schema.booksHanler);

app.post("/books", schema.addBooksHandler);

app.delete("/books/:id", schema.deleteBooksHandler);

app.get("/test", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
