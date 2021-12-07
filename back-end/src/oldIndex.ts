import { BrowserSingleton } from "./browser/BrowserSingleton"
import { Monitor } from "./Monitor"
import { NikeScrapper } from './Scrapper'

// usar monitor.html
let monitor: typeof Monitor.prototype

async function BrowserInit() {
  const browser = BrowserSingleton.getInstance()
  await browser.init()
  const page = await browser.createPage("https://www.nike.com.br/masculino/calcados")

  return page

  monitor = new Monitor(browser.html)
 
  async function checkUpdate() {
    await monitor.update(page)
    
    console.log(monitor.html)
  }
  
  // setInterval(checkUpdate, 7000)
}

async function BrowserClone() {

}

async function BrowserMonitor() {
  // monitor = await new Monitor(BrowserInit().content()) 
}

async function nikeNewArrivals() {
  const scrapper = new NikeScrapper(monitor.html)
  return scrapper.getNewArrivals()
}

(async () => {
  await BrowserInit()
  console.log(await nikeNewArrivals())
})()

// module.exports = { monitor, nikeNewArrivals }