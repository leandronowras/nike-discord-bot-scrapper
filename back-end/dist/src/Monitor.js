"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
class Monitor {
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
exports.Monitor = Monitor;
