"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocket = void 0;
const socket_io_1 = require("socket.io");
const setupSocket = (httpServer) => {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
        },
    });
    io.on("connection", (socket) => {
        console.log(`🔌 New client connected: ${socket.id}`);
        socket.on("ping", () => {
            console.log("📡 Ping received");
            socket.emit("pong");
        });
        socket.on("disconnect", () => {
            console.log(`❌ Client disconnected: ${socket.id}`);
        });
    });
};
exports.setupSocket = setupSocket;
//# sourceMappingURL=index.js.map