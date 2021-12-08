"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const BrowserSingleton_1 = require("./browser/BrowserSingleton");
const Scrapper_1 = require("./Scrapper");
let status = 'closed';
(async () => {
    const nike = BrowserSingleton_1.BrowserSingleton.getInstance();
    await nike.init();
    const nikePage = await nike.createPage("https://www.nike.com.br/masculino/calcados");
    // dev = ts-node prod = npm run main
    const pathDevInfo = './../../data/nikeNewArrivals.json';
    const pathDevImg = './../../data/arrivalsImgLink.json';
    const pathProdInfo = './../../../data/nikeNewArrivals.json';
    const pathProdImg = './../../../data/arrivalsImgLink.json';
    async function nikeNewArrivals() {
        const scrapper = new Scrapper_1.NikeScrapper(await nikePage.content());
        const data = scrapper.getNewArrivalsInfo();
        return data;
    }
    async function arrivalsImgLink() {
        const scrapper = new Scrapper_1.NikeScrapper(await nikePage.content());
        const data = scrapper.getNewArrivalsImgLink();
        return data;
    }
    async function monitorInfo() {
        const nike = JSON.stringify(await nikeNewArrivals());
        const data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, pathProdInfo)).toString();
        if (nike == data) {
            console.log('info iguais');
        }
        else {
            console.log('info diferentes');
            await updateInfo();
            console.log('banco de dados atualizado');
        }
    }
    async function monitorImgLink() {
        const nike = JSON.stringify(await arrivalsImgLink());
        const data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, pathProdImg)).toString();
        if (nike == data) {
            console.log('img link iguais');
        }
        else {
            console.log('img link diferentes');
            await updateImgLink();
            console.log('banco de dados atualizado');
        }
    }
    async function updateInfo() {
        fs_1.default.writeFileSync(path_1.default.resolve(__dirname, pathProdInfo), JSON.stringify(await nikeNewArrivals()));
    }
    async function updateImgLink() {
        fs_1.default.writeFileSync(path_1.default.resolve(__dirname, pathProdImg), JSON.stringify(await arrivalsImgLink()));
    }
    await updateImgLink();
    setInterval(monitorInfo, 5000);
    setInterval(monitorImgLink, 5000);
})();
module.exports = { status };
