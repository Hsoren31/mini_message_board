const express = require("express");
const path = require("node:path");
const db = require("./db/queries");

require("dotenv").config();
const app = express();
const messageRouter = require("./routes/messageRouter");

//connect to views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//access form values
app.use(express.urlencoded({ extended: true }));

app.use("/new", messageRouter);
app.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}...`);
});
