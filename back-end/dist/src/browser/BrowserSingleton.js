"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserSingleton = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = __importDefault(require("cheerio"));
class BrowserSingleton {
    constructor() {
        (async () => {
            await this.init();
        })();
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new BrowserSingleton();
        }
        return this.instance;
    }
    async init(HeadLess = false, SlowDown = 0, DevTools = false) {
        this.browser = await this.startBrowser(HeadLess, SlowDown, DevTools);
    }
    async startBrowser(HeadLess, SlowDown, DevTools) {
        return await puppeteer_1.default.launch({
            headless: HeadLess,
            devtools: DevTools,
            ignoreHTTPSErrors: true,
            slowMo: SlowDown
            // args: [
            //     '--no-sandbox',
            //     '--disable-setuid-sandbox',
            //     '--disable-dev-shm-usage',
            //     '--disable-accelerated-2d-canvas',
            //     '--no-first-run',
            //     '--no-zygote',
            //     '--disable-gpu'
            //     // '--single-process' 
            //     // '--user-data-dir=./'
            // ]
        });
    }
    async createPage(URL) {
        const page = await this.browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: false,
            isMobile: false,
        });
        await page.setJavaScriptEnabled(true);
        //skips css fonts and images for performance and efficiency
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (req.resourceType() == 'font' || req.resourceType() == 'stylesheet') {
                req.abort();
            }
            else {
                req.continue();
            }
        });
        try {
            await page.goto(URL);
            const html = await page.content();
            const $ = cheerio_1.default.load(html);
            this.html = $.html();
        }
        catch (err) {
            await page.close();
            throw err;
        }
        return page;
    }
    async releaseBrowser() {
        if (this.browser)
            await this.browser.close();
    }
}
exports.BrowserSingleton = BrowserSingleton;
BrowserSingleton.instance = null;
// (async () => {
//   const test1 = BrowserSingleton.getInstance()
//   await test1.init()
//   await test1.createPage("http://localhost:3000")
//   console.log(test1.html)
// })()
