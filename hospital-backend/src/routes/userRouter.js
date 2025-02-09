import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  login,
  readAllUserController,
  readSpecificUserController,
  UpdateUserController,
  verifyEmail,
} from "../controller/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readAllUserController);

userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(UpdateUserController)
  .delete(deleteUserController);

userRouter.route("/verify-email").post(verifyEmail);
userRouter.route("/login").post(login);
export default userRouter;
