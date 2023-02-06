import { Router } from "express";
import catchAsync from "../../utils/catchAsync.js";

import AuthController from "./controller.js";

import isAuthenticated from "../../middleware/isAuthenticated.js";

const router = Router();

router.post("/", catchAsync(AuthController.CreateNewUser));
router.post("/login", catchAsync(AuthController.VerifyOTP));
router.post("/generateotp", catchAsync(AuthController.CreateNewOTP));
// router.post("/seller", catchAsync(AuthController.CreateNewSeller));
// router.post("/seller/verify", catchAsync(AuthController.VerifyOTPSeller));
// router.post("/seller/login", catchAsync(AuthController.LoginSeller));

export default router;
