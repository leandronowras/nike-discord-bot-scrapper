import { BrowserSingleton } from "./browser/BrowserSingleton"
import { Monitor } from "./Monitor"

(async () => {
  const browser = BrowserSingleton.getInstance()
  await browser.init()
  const page = await browser.createPage("http://127.0.0.1:5500/designPatterns/comportamentais/observer/aula01/index.html")

  const monitor = new Monitor(browser.html)


  
  async function checkUpdate() {
    await monitor.update(page)
    
    console.log(monitor.html)
  }
  
  setInterval(checkUpdate, 7000)

})()