import fs from 'fs'
import path from 'path'
import { BrowserSingleton } from "./browser/BrowserSingleton"
import { NikeScrapper } from './Scrapper';

let status = 'closed';
(async () => {
  const nike = BrowserSingleton.getInstance()
  await nike.init()
  const nikePage = await nike.createPage("https://www.nike.com.br/masculino/calcados")
 

  async function nikeNewArrivals() {
    const scrapper = new NikeScrapper(await nikePage.content())
    const data = scrapper.getNewArrivals()
    fs.writeFileSync(path.resolve(__dirname, './../../../data/nikeNewArrivals.json'), JSON.stringify(data))
  }

  await nikeNewArrivals();

  async function monitor() {
    // const monitor = new Monitor()
  }

  setInterval(monitor, 15000)
 
})();

module.exports = {status}