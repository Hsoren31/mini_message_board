import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { messages, addMessage, formatDate } from "./db.js";
//initialize app which is the server
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
import userRouter from "./routes/userRouter.js";

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
//app.get a route
app.use(urlencoded({ extended: true }));
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
