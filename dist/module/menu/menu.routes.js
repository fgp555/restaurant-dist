"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("./menu.controller");
const router = (0, express_1.Router)();
router.get("/", menu_controller_1.MenuItemController.getAll);
router.get("/:id", menu_controller_1.MenuItemController.getOne);
router.post("/", menu_controller_1.MenuItemController.create);
router.put("/:id", menu_controller_1.MenuItemController.update);
router.delete("/:id", menu_controller_1.MenuItemController.remove);
exports.default = router;
//# sourceMappingURL=menu.routes.js.map