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
    getNewArrivalsInfo() {
        let result = [];
        this.$("div.produto__info").each((index, elem) => {
            let name = this.$(elem).find("a.produto__nome").text() + "--";
            let price = this.$(elem).find("span.produto__preco_por").text() + "--";
            let link = this.$(elem).find("a.produto__nome").prop("href") + "--";
            result.push({ name, price, link });
        });
        return result.slice(0, 4);
    }
    getNewArrivalsImgLink() {
        let result = [];
        this.$("div.produto__imagem").each((index, elem) => {
            let imgNikeLink = this.$(elem).find("img.produto__imagem-principal").prop("src");
            result.push({ imgNikeLink });
        });
        return result.slice(0, 4);
    }
}
exports.NikeScrapper = NikeScrapper;
/*
--- info ---
$("div.produto__info").find("a.produto__nome").text()
$("div.produto__info").find("span.produto__preco_por").text() -> preco total
$("div.produto__info").find("a.produto__nome").prop("href") -> link do primeiro

$("div.produto__info").each((index, elem) => {
  console.log($(elem).find("a.produto__nome").text())
  console.log($(elem).find("span.produto__preco_por").text())
  console.log($(elem).find("a.produto__nome").prop("href"))
})


--- imagens ---
$("div.produto__imagem").find("img.produto__imagem-principal").prop("src")

$("div.produto__imagem").each((index, elem) => {
  console.log($(elem).find("img.produto__imagem-principal").prop("src"))
})
*/ 
