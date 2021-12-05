"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrapper = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
const url = 'https://www.nike.com.br/masculino/calcados/corrida?p=1&Fabricante=&Filtros=&cor=&tamanho=&precode=&precoate=&ofertas=&ordenacao=3&limit=24&ordemFiltro=&site_id=';
class Scrapper {
    constructor(url) {
        this.url = url;
    }
    async getProductsTitle() {
        const browser = await puppeteer_1.default.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(this.url);
        const html = await page.content();
        const $ = cheerio_1.default.load(html);
        const result = [];
        $('a.produto__nome').each((index, element) => {
            let title = $(element).text();
            result.push(title);
        });
        console.log(result);
        browser.close();
        return result;
    }
}
exports.Scrapper = Scrapper;
const nikeScrapper = new Scrapper(url);
nikeScrapper.getProductsTitle();
