import express from "express";
// import { singleUpload } from "../../middlewares/mutler";
import { login, logout, register, updateProfile,  } from "./user.controller.js";
 import isAuthenticated from "../../middlewares/isAuthenticated.js";
import { singleUpload } from "../../middlewares/mutler.js";

 
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export const UserRoutes = router;


