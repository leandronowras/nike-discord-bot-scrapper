"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
// ideia: abrir puppeter, nao fechar e ficar dando refresh na pagina
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
class Monitor {
    constructor(url, html = '') {
        this.url = url;
        this.html = html;
        this.puppeteer = puppeteer_1.default;
        this.url = url;
    }
    async loadPage() {
        const browser = await puppeteer_1.default.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(this.url);
        const html = await page.content();
        const $ = cheerio_1.default.load(html);
        this.html = $.html();
        return $.html();
    }
    getHtml() {
    }
}
exports.Monitor = Monitor;
