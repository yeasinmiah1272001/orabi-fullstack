import express from "express";
import {
  addmiinLogin,
  getUsers,
  removeUser,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userContoller.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

// userRouter.get("/users", (req, res) => {
//   res.send("user is connection success");
// });

userRouter.post("/login", userLogin);
userRouter.post("/register", userRegister);
userRouter.post("/addmin", addmiinLogin);
userRouter.post("/remove", removeUser);
userRouter.put("/update/:id", updateUser);
userRouter.get("/users", adminAuth, getUsers);

export default userRouter;
