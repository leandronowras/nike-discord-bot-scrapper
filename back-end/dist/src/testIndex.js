"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const BrowserSingleton_1 = require("./browser/BrowserSingleton");
const Scrapper_1 = require("./Scrapper");
(async () => {
    const nike = BrowserSingleton_1.BrowserSingleton.getInstance();
    await nike.init();
    const nikePage = await nike.createPage("https://www.nike.com.br/masculino/calcados");
    async function nikeNewArrivals() {
        const scrapper = new Scrapper_1.NikeScrapper(await nikePage.content());
        const data = scrapper.getNewArrivals();
        fs_1.default.writeFileSync(path_1.default.join(__dirname, '/endpoints', '/nikeNewArrivals.ts'), JSON.stringify(data));
    }
    await nikeNewArrivals();
    module.exports = true;
})();
