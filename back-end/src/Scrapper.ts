import puppeteer from 'puppeteer'
import cheerio from 'cheerio'

export class Scrapper {
  constructor(readonly url: string) {}

  async getProductsTitle () {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(this.url)
  
    const html = await page.content()
  
    const $ = cheerio.load(html);
  
    const result: string[] = []

    $('a.produto__nome').each((index, element) => { 
      let title = $(element).text()
      result.push(title)
    })
  
    browser.close()

    return result
  }
}

