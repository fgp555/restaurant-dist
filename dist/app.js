"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
// src/app.ts
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const category_routes_1 = __importDefault(require("./module/category/category.routes"));
const menu_routes_1 = __importDefault(require("./module/menu/menu.routes"));
const restaurant_routes_1 = __importDefault(require("./module/restaurant/restaurant.routes"));
const feedback_routes_1 = __importDefault(require("./module/feedback/feedback.routes"));
const sheet_routes_1 = __importDefault(require("./module/feedback/sheet.routes"));
const setupFrontendFallback_1 = require("./utils/setupFrontendFallback");
const createApp = () => {
    const app = (0, express_1.default)();
    // ✅ Crear carpeta /uploads si no existe
    const uploadsPath = path_1.default.join(__dirname, "../uploads");
    if (!fs_1.default.existsSync(uploadsPath)) {
        fs_1.default.mkdirSync(uploadsPath, { recursive: true });
        console.log("📁 Carpeta 'uploads' creada.");
    }
    // Middleware
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json());
    // app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
    app.use("/uploads", express_1.default.static(uploadsPath, {
        setHeaders: (res, filePath) => {
            if (filePath.endsWith(".mp4")) {
                res.setHeader("Content-Type", "video/mp4");
            }
        },
    }));
    // Routes
    app.use("/api/feedback", feedback_routes_1.default);
    // app.use("/api/google-sheet", googleSheetRoutes);
    // app.use("/api/email", EmailRoutes);
    app.use("/api/category", category_routes_1.default);
    app.use("/api/menu", menu_routes_1.default);
    app.use("/api/restaurant", restaurant_routes_1.default);
    app.use("/api/sheet", sheet_routes_1.default);
    const clientBuildPath = path_1.default.join(__dirname, "../../restaurant-dist/frontend");
    (0, setupFrontendFallback_1.setupFrontendFallback)(app, clientBuildPath);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map