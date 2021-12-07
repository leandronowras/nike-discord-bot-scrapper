"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserSingleton_1 = require("./browser/BrowserSingleton");
const Monitor_1 = require("./Monitor");
const Scrapper_1 = require("./Scrapper");
// usar monitor.html
let monitor;
async function BrowserInit() {
    const browser = BrowserSingleton_1.BrowserSingleton.getInstance();
    await browser.init();
    const page = await browser.createPage("https://www.nike.com.br/masculino/calcados");
    return page;
    monitor = new Monitor_1.Monitor(browser.html);
    async function checkUpdate() {
        await monitor.update(page);
        console.log(monitor.html);
    }
    // setInterval(checkUpdate, 7000)
}
async function BrowserClone() {
}
async function BrowserMonitor() {
    // monitor = await new Monitor(BrowserInit().content()) 
}
async function nikeNewArrivals() {
    const scrapper = new Scrapper_1.NikeScrapper(monitor.html);
    return scrapper.getNewArrivals();
}
(async () => {
    await BrowserInit();
    console.log(await nikeNewArrivals());
})();
// module.exports = { monitor, nikeNewArrivals }
