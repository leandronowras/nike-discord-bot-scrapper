// ideia: abrir puppeter, nao fechar e ficar dando refresh na pagina
import puppeteer from 'puppeteer'
import cheerio from 'cheerio'

export class Monitor {
  puppeteer: typeof puppeteer

  constructor(readonly url: string, public html: string = '') {
  this.puppeteer = puppeteer
    this.url = url
  }
  
  async loadPage() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(this.url)
  
    const html = await page.content()

    const $ = cheerio.load(html);

    this.html = $.html()

    return $.html()
  }

  getHtml() {

  }

}