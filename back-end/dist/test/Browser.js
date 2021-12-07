"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserSingleton_1 = require("../src/browser/BrowserSingleton");
test.skip("Deve criar um browser", async () => {
    BrowserSingleton_1.BrowserSingleton.getInstance();
});
