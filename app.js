const express = require("express");
const path = require("node:path");
const {
  messages,
  addMessage,
  formatDate,
} = require("../mini-message-board/db");
//initialize app which is the server
const app = express();
const userRouter = require("./routes/userRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.get a route
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.post("/new", (req, res, next) => {
  addMessage({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: formatDate(new Date()),
  });

  res.redirect("/");
});
app.get("/new", (req, res) => res.render("messageForm"));

app.get("/", (req, res) =>
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  })
);

app.get("*", (req, res) => {
  res.send("404 error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
