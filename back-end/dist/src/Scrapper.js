"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NikeScrapper = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
class NikeScrapper {
    constructor(html) {
        this.html = html;
        this.arrivals = [];
        this.$ = cheerio_1.default.load(this.html);
    }
    geth1Tags() {
        const result = [];
        this.$("h1").each((index, elem) => {
            let h1s = (this.$(elem).text());
            result.push(h1s);
        });
        return result;
    }
    getNewArrivals() {
        let result = [];
        this.$("div.produto__info").each((index, elem) => {
            let name = this.$(elem).find("a.produto__nome").text();
            let price = this.$(elem).find("span.produto__preco_por").text();
            result.push({ name: name, price: price });
        });
        return result;
    }
}
exports.NikeScrapper = NikeScrapper;
/*
$("div.produto__info").find("a.produto__nome").text()
$("div.produto__info").find("span.produto__preco_por").text() -> preco total

*/ 
