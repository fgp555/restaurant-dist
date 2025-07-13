"use strict";
// src/common/services/google-sheet.service.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheetService = void 0;
const googleapis_1 = require("googleapis");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Cargar credenciales desde archivo local
const credentialsPath = path_1.default.join(__dirname, "../../../credentials/google-credentials.json");
const credentials = JSON.parse(fs_1.default.readFileSync(credentialsPath, "utf8"));
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const jwtClient = new googleapis_1.google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
});
const sheetsApi = googleapis_1.google.sheets({ version: "v4", auth: jwtClient });
const spreadsheetName = process.env.GOOGLE_SHEET;
class GoogleSheetService {
    static async appendToSheet(values) {
        const branchVisited = values[0][6];
        await jwtClient.authorize();
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        return await sheetsApi.spreadsheets.values.append({
            spreadsheetId,
            range: `'${branchVisited}'!A1`,
            valueInputOption: "USER_ENTERED",
            requestBody: { values },
        });
    }
    static async readSheet(range = `'${spreadsheetName}'!A1:Z`) {
        await jwtClient.authorize();
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        return await sheetsApi.spreadsheets.values.get({ spreadsheetId, range });
    }
}
exports.GoogleSheetService = GoogleSheetService;
//# sourceMappingURL=google-sheet.service.js.map