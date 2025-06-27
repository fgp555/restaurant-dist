"use strict";
// src\experience\experience.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceController = void 0;
const experience_service_1 = require("./experience.service");
class ExperienceController {
    static async create(req, res) {
        const result = await experience_service_1.ExperienceService.create(req.body);
        res.status(201).json(result);
    }
    static async getAll(req, res) {
        const experiences = await experience_service_1.ExperienceService.findAll();
        res.json(experiences);
    }
    static async getOne(req, res) {
        const experience = await experience_service_1.ExperienceService.findOne(Number(req.params.id));
        if (!experience) {
            res.status(404).json({ message: "Not Found" });
            return;
        }
        res.json(experience);
    }
    static async update(req, res) {
        const updated = await experience_service_1.ExperienceService.update(Number(req.params.id), req.body);
        if (!updated) {
            res.status(404).json({ message: "Not Found" });
            return;
        }
        res.json(updated);
    }
    static async remove(req, res) {
        const success = await experience_service_1.ExperienceService.remove(Number(req.params.id));
        res.json({ deleted: success });
    }
}
exports.ExperienceController = ExperienceController;
//# sourceMappingURL=experience.controller.js.map