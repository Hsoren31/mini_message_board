const { Router } = require("express");
const { getUserByName } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/:userId", getUserByName);
userRouter.get("/", (req, res) => res.send("All Users"));

module.exports = userRouter;
