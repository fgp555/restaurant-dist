"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSeeders = void 0;
const data_source_1 = require("../../config/data-source");
const seedRestaurant_1 = require("./seedRestaurant");
const runSeeders = async () => {
    const connection = data_source_1.AppDataSource;
    if (!connection.isInitialized) {
        await connection.initialize();
    }
    // 🌱 Ejecutar seeders ✅
    await (0, seedRestaurant_1.seedRestaurant)();
    return { message: "Seeders executed successfully" };
};
exports.runSeeders = runSeeders;
//# sourceMappingURL=runSeeders.js.map