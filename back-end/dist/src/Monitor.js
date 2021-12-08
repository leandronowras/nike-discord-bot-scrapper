"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = exports.OldMonitor = void 0;
class OldMonitor {
    constructor(html) {
        this.html = html;
    }
    async update(page) {
        await page.reload();
        if (this.html !== await page.content()) {
            this.html = await page.content();
        }
    }
}
exports.OldMonitor = OldMonitor;
class Monitor {
    static monitoringNewArrivals(json) {
    }
}
exports.Monitor = Monitor;
