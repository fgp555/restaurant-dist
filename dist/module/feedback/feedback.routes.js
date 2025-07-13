"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/module/feedback/feedback.routes.ts
const express_1 = require("express");
const feedback_controller_1 = require("./feedback.controller");
const verifyToken_1 = require("../../middleware/verifyToken");
const router = (0, express_1.Router)();
router.post("/", verifyToken_1.verifyToken, feedback_controller_1.FeedbackController.create);
router.get("/", verifyToken_1.verifyToken, feedback_controller_1.FeedbackController.getAll);
router.get("/:id", verifyToken_1.verifyToken, feedback_controller_1.FeedbackController.getOne);
router.put("/:id", verifyToken_1.verifyToken, feedback_controller_1.FeedbackController.update);
router.delete("/:id", verifyToken_1.verifyToken, feedback_controller_1.FeedbackController.remove);
exports.default = router;
//# sourceMappingURL=feedback.routes.js.map