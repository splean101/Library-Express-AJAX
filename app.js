const express = require("express");
const userApiRouter = require("./book/bookApiRouter");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use("/api/books", bookApiRouter);

app.listen(3000);