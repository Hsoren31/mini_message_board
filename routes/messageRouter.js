const { Router } = require("express");
const controller = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", controller.newMessageGet);
messageRouter.post("/", controller.newMessagePost);

module.exports = messageRouter;
