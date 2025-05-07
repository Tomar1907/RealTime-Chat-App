import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {getUsersForSidebar} from "../controllers/message.controller.js"
import { getMessages , sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute , sendMessage);

export default router;