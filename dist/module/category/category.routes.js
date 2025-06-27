"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.get("/", category_controller_1.CategoryController.getAll);
router.get("/:id", category_controller_1.CategoryController.getOne);
router.post("/", category_controller_1.CategoryController.create);
router.put("/:id", category_controller_1.CategoryController.update);
router.delete("/:id", category_controller_1.CategoryController.remove);
exports.default = router;
//# sourceMappingURL=category.routes.js.map