"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const google_sheet_controller_1 = require("./google-sheet.controller");
const router = (0, express_1.Router)();
router.get("/", google_sheet_controller_1.GoogleSheetController.read);
router.post("/", google_sheet_controller_1.GoogleSheetController.append);
exports.default = router;
//# sourceMappingURL=google-sheet.routes.js.map