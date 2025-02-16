import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  login,
  readAllUserController,
  readSpecificUserController,
  updatePassword,
  UpdateUserController,
  updateUserProfile,
  userProfile,
  verifyEmail,
} from "../controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readAllUserController);

userRouter.route("/verify-email").post(verifyEmail);
userRouter.route("/login").post(login);
userRouter.route("/user-profile").get(isAuthenticated, userProfile);
userRouter
  .route("/update-userprofile")
  .patch(isAuthenticated, updateUserProfile);

userRouter.route("/update-password").patch(isAuthenticated, updatePassword);

userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(UpdateUserController)
  .delete(deleteUserController);
export default userRouter;
