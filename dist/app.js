"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const category_routes_1 = __importDefault(require("./module/category/category.routes"));
const menu_routes_1 = __importDefault(require("./module/menu/menu.routes"));
const restaurant_routes_1 = __importDefault(require("./module/restaurant/restaurant.routes"));
const createApp = () => {
    const app = (0, express_1.default)();
    // Middleware
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json());
    // Routes
    app.use("/api/category", category_routes_1.default);
    app.use("/api/menu", menu_routes_1.default);
    app.use("/api/restaurant", restaurant_routes_1.default);
    // Health check
    app.get("/", (_, res) => {
        res.send("Hello from Express + TypeScript + GraphQL + Socket.IO!");
    });
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map