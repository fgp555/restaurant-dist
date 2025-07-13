"use strict";
// src/config/data-source.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectionSource = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const category_entity_1 = require("../module/category/entities/category.entity");
const menu_entity_1 = require("../module/menu/entities/menu.entity");
const restaurant_entity_1 = require("../module/restaurant/entities/restaurant.entity");
const table_entity_1 = require("../module/restaurant/entities/table.entity");
const user_entity_1 = require("../module/restaurant/entities/user.entity");
const feedback_entity_1 = require("../module/feedback/entities/feedback.entity");
console.log("DROPSCHEMA", envs_1.DB_ENV.DROPSCHEMA);
const entities = [
    category_entity_1.CategoryEntity,
    menu_entity_1.MenuEntity,
    restaurant_entity_1.RestaurantEntity,
    user_entity_1.UserEntity,
    table_entity_1.TableEntity, //
    feedback_entity_1.FeedbackEntity,
];
// Configuración de TypeORM
const typeOrmConfig = {
    type: envs_1.DB_ENV.DB_TYPE,
    host: envs_1.DB_ENV.DB_HOST,
    port: envs_1.DB_ENV.DB_PORT,
    username: envs_1.DB_ENV.DB_USERNAME,
    password: envs_1.DB_ENV.DB_PASSWORD,
    database: envs_1.DB_ENV.DB_DATABASE,
    charset: "utf8mb4", // 👈 IMPORTANTE
    synchronize: envs_1.DB_ENV.SYNCHRONIZE,
    dropSchema: envs_1.DB_ENV.DROPSCHEMA,
    logging: ["error"],
    entities: entities,
    migrations: ["dist/migrations/*{.ts,.js}"],
    subscribers: [],
    ssl: envs_1.DB_ENV.DB_SSL, // Configuración SSL opcional
};
// Crear la instancia de DataSource
exports.AppDataSource = new typeorm_1.DataSource(typeOrmConfig);
// Exporta el tipo para uso global en otras partes de la app
exports.conectionSource = new typeorm_1.DataSource(typeOrmConfig);
//# sourceMappingURL=data-source.js.map