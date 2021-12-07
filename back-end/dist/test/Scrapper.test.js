"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scrapper_1 = require("../src/Scrapper");
test.skip("deve retornar um array com os h1s do site", () => {
    const html = "<html><head></head><body><h1>oi discord!!!</h1></body></html>";
    const scrapper = new Scrapper_1.NikeScrapper(html);
    expect(scrapper.geth1Tags()).toBe(["oi discord!!!"]);
});
