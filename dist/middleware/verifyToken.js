"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
const HARD_CODED_TOKEN = "TU_TOKEN_AQUI";
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Token no proporcionado" });
        return; // ✅ importante: terminar la ejecución
    }
    const token = authHeader.split(" ")[1];
    if (token !== HARD_CODED_TOKEN) {
        res.status(403).json({ message: "Token inválido" });
        return; // ✅ importante: terminar la ejecución
    }
    next(); // ✅ continuar si el token es válido
}
//# sourceMappingURL=verifyToken.js.map