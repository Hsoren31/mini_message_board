import { Router } from "express";
import { getUserDataByName } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/:userId", getUserDataByName);
userRouter.get("/", (req, res) => res.send("All Users"));

export default userRouter;
