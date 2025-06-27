"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
// src/module/experience/experience.service.ts
const data_source_1 = require("../config/data-source");
const experience_entity_1 = require("./entities/experience.entity");
class ExperienceService {
    static async create(data) {
        const exp = this.repo.create(data);
        return await this.repo.save(exp);
    }
    static async findAll() {
        return await this.repo.find();
    }
    static async findOne(id) {
        return await this.repo.findOneBy({ id });
    }
    static async update(id, data) {
        const record = await this.repo.findOneBy({ id });
        if (!record)
            return null;
        this.repo.merge(record, data);
        return await this.repo.save(record);
    }
    static async remove(id) {
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
}
exports.ExperienceService = ExperienceService;
ExperienceService.repo = data_source_1.AppDataSource.getRepository(experience_entity_1.ExperienceEntity);
//# sourceMappingURL=experience.service.js.map