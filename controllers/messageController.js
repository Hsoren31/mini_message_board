const db = require("../db/queries");

async function newMessageGet(req, res) {
  res.render("messageForm");
}

async function newMessagePost(req, res) {
  const { messageUser, messageText } = req.body;
  await db.insertMessage(messageUser, messageText);
  res.redirect("/");
}

module.exports = { newMessageGet, newMessagePost };
