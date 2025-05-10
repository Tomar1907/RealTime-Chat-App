import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// Static routes first
router.get("/users", protectRoute, getUsersForSidebar);

// Avoid conflict by prefixing dynamic routes
router.get("/chat/:id", protectRoute, getMessages);
router.post("/chat/send/:id", protectRoute, sendMessage);

export default router;
