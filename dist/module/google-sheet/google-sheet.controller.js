"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheetController = void 0;
const google_sheet_service_1 = require("./google-sheet.service");
class GoogleSheetController {
    static async read(req, res) {
        try {
            const result = await google_sheet_service_1.GoogleSheetService.readSheet();
            res.json({ success: true, data: result.data.values || [] });
        }
        catch (error) {
            console.error("❌ Error reading from Google Sheets:", error);
            res.status(500).json({ error: "Failed to read from Google Sheets" });
        }
    }
    static async append(req, res) {
        try {
            const values = req.body.values;
            if (!Array.isArray(values) || !Array.isArray(values[0])) {
                res.status(400).json({
                    error: "Invalid 'values' format. Must be an array of arrays.",
                });
                return;
            }
            const result = await google_sheet_service_1.GoogleSheetService.appendToSheet(values);
            res.json({ success: true, result: result.data });
        }
        catch (error) {
            console.error("❌ Error writing to Google Sheets:", error);
            res.status(500).json({ error: "Failed to write to Google Sheets" });
        }
    }
}
exports.GoogleSheetController = GoogleSheetController;
//# sourceMappingURL=google-sheet.controller.js.map