"use strict";
// src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const socket_1 = require("./socket");
const dotenv_1 = require("dotenv");
const data_source_1 = require("./config/data-source");
const runSeeders_1 = require("./module/seed/runSeeders");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("✅ Database connected");
        // Ejecutar el Seeder si la variable de entorno lo permite
        if (process.env.SEED_DATA === "true") {
            await (0, runSeeders_1.runSeeders)();
        }
        const app = (0, app_1.createApp)();
        const httpServer = (0, http_1.createServer)(app);
        // Inicializa Socket.IO si lo necesitas
        (0, socket_1.setupSocket)(httpServer);
        httpServer.listen(PORT, () => {
            console.log(`✅ HTTP server running at http://localhost:${PORT}`);
            console.log(`📡 Socket.IO listening on same port`);
        });
    }
    catch (err) {
        console.error("❌ Failed to start server:", err);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=main.js.map