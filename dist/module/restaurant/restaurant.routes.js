"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/module/restaurant/restaurant.routes.ts
const express_1 = require("express");
const restaurant_controller_1 = require("./restaurant.controller");
const router = (0, express_1.Router)();
router.get("/", restaurant_controller_1.RestaurantController.getAll);
router.get("/slug/:slug", restaurant_controller_1.RestaurantController.getBySlug);
router.get("/waiter/:slug", restaurant_controller_1.RestaurantController.getWaitersBySlug);
router.get("/categories/:slug", restaurant_controller_1.RestaurantController.getCategoriesBySlug);
router.get("/tables/:slug", restaurant_controller_1.RestaurantController.getTablesBySlug);
router.get("/:id", restaurant_controller_1.RestaurantController.getOne);
router.post("/", restaurant_controller_1.RestaurantController.create);
router.put("/:id", restaurant_controller_1.RestaurantController.update);
router.delete("/:id", restaurant_controller_1.RestaurantController.remove);
exports.default = router;
//# sourceMappingURL=restaurant.routes.js.map