"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/module/experience/experience.routes.ts
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const router = (0, express_1.Router)();
router.post("/", experience_controller_1.ExperienceController.create);
router.get("/", experience_controller_1.ExperienceController.getAll);
router.get("/:id", experience_controller_1.ExperienceController.getOne);
router.put("/:id", experience_controller_1.ExperienceController.update);
router.delete("/:id", experience_controller_1.ExperienceController.remove);
exports.default = router;
//# sourceMappingURL=experience.routes.js.map