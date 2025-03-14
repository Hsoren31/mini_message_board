import { Router } from "express";
import { getUserByName } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/:userId", getUserByName);
userRouter.get("/", (req, res) => res.send("All Users"));

export default userRouter;
