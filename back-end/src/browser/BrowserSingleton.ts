import puppeteer from 'puppeteer'
import cheerio from 'cheerio'

export class BrowserSingleton {
  private static instance: BrowserSingleton | null = null;
  browser!: puppeteer.Browser;
  public html: any
 
  private constructor() {
    (async () => {
      await this.init()
    })()
  }

  static getInstance(): BrowserSingleton {
    if(this.instance === null) {
      this.instance = new BrowserSingleton()
    }
    
    return this.instance
  }

  async init(HeadLess: boolean = true, SlowDown: number = 0, DevTools: boolean = false) {
    this.browser = await this.startBrowser(HeadLess, SlowDown, DevTools)
  }

  private async startBrowser(HeadLess: boolean, SlowDown: number, DevTools: boolean): Promise<puppeteer.Browser> {
    return await puppeteer.launch({
      headless: HeadLess,
      devtools: DevTools,
      ignoreHTTPSErrors: true,
      slowMo: SlowDown,
      args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
          // '--single-process' 
          // '--user-data-dir=./'
      ]
  });
  }

  public async createPage(URL: string): Promise<puppeteer.Page> {
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
        if(req.resourceType() == 'font' || req.resourceType() == 'image' || req.resourceType() == 'stylesheet' ){
            req.abort();
        }
        else {
            req.continue();
        }
    });

    try {
        await page.goto(URL);
        const html = await page.content()

        const $ = cheerio.load(html);

        this.html = $.html()
        
    } catch (err) {
            await page.close();
            throw err;
    }

    return page;
}


  private async releaseBrowser() {
    if (this.browser) await this.browser.close();
}
}

// (async () => {
//   const test1 = BrowserSingleton.getInstance()
//   await test1.init()
//   await test1.createPage("http://localhost:3000")
//   console.log(test1.html)
// })()