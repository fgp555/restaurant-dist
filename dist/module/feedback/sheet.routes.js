"use strict";
// src/feedback/sheet.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sheet_controller_1 = require("./sheet.controller");
const router = (0, express_1.Router)();
router.post("/", sheet_controller_1.sendToSheet);
router.get("/", sheet_controller_1.getFromSheet);
exports.default = router;
//# sourceMappingURL=sheet.routes.js.map