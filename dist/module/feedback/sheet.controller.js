"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromSheet = exports.sendToSheet = void 0;
const googleapis_1 = require("googleapis");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Ruta al archivo de credenciales
const credentialsPath = path_1.default.join(__dirname, "../../../credentials/google-credentials.json");
const credentials = JSON.parse(fs_1.default.readFileSync(credentialsPath, "utf8"));
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const jwtClient = new googleapis_1.google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
});
const sendToSheet = async (req, res) => {
    try {
        // Autenticación
        await jwtClient.authorize();
        const sheets = googleapis_1.google.sheets({ version: "v4", auth: jwtClient });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const spreadsheetName = process.env.GOOGLE_SHEET;
        const range = `'${spreadsheetName}'!A1`;
        const { name, email, whatsapp, birthday, sawAd, howDidYouKnowUs, branchVisited, waiterName, experienceRating, improvementSuggestions, } = req.body;
        const values = [
            [
                name,
                email,
                whatsapp,
                birthday,
                sawAd ? "Sí" : "No",
                howDidYouKnowUs,
                branchVisited,
                waiterName,
                experienceRating,
                improvementSuggestions,
            ],
        ];
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values,
            },
        });
        res.json({ success: true, data: response.data });
    }
    catch (error) {
        console.error("❌ Error al enviar a Google Sheets:", error);
        res.status(500).json({ error: "Error al enviar a Google Sheets" });
    }
};
exports.sendToSheet = sendToSheet;
// ✅ NUEVO: Leer datos de la hoja
const getFromSheet = async (req, res) => {
    try {
        await jwtClient.authorize();
        const sheets = googleapis_1.google.sheets({ version: "v4", auth: jwtClient });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const spreadsheetName = process.env.GOOGLE_SHEET;
        const range = `'${spreadsheetName}'!A1:J`; // Asegúrate de usar el rango correcto
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        const rows = response.data.values || [];
        res.json({ success: true, rows });
    }
    catch (error) {
        console.error("❌ Error al leer desde Google Sheets:", error);
        res.status(500).json({ error: "Error al leer desde Google Sheets" });
    }
};
exports.getFromSheet = getFromSheet;
//# sourceMappingURL=sheet.controller.js.map