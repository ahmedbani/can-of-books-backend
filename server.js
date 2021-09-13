"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schema = require('./booksSchema')

const app = express();
app.use(cors());

const PORT = process.env.PORT;

//mongo DB

schema.main().catch((err) => console.log(err));


//Routes
app.get('/books',schema.booksHanler);

app.get("/test", (request, response) => {
  response.send("test request received");
});



app.listen(PORT, () => console.log(`listening on ${PORT}`));
