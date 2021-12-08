import fs from 'fs'
import path from 'path'
import { BrowserSingleton } from "./browser/BrowserSingleton"
import { NikeScrapper } from './Scrapper';

let status = 'closed';
(async () => {
  const nike = BrowserSingleton.getInstance()
  await nike.init()
  const nikePage = await nike.createPage("https://www.nike.com.br/masculino/calcados")
 
  // dev = ts-node prod = npm run main
  const pathDevInfo = './../../data/nikeNewArrivals.json'
  const pathDevImg = './../../data/arrivalsImgLink.json'
  const pathProdInfo = './../../../data/nikeNewArrivals.json'
  const pathProdImg = './../../../data/arrivalsImgLink.json'


  async function nikeNewArrivals() {
    const scrapper = new NikeScrapper(await nikePage.content())
    const data = scrapper.getNewArrivalsInfo()
    return data
  }

  async function arrivalsImgLink() {
    const scrapper = new NikeScrapper(await nikePage.content())
    const data = scrapper.getNewArrivalsImgLink()
    return data
  }

  async function monitorInfo() {
    const nike:string = JSON.stringify(await nikeNewArrivals())
    const data:string = fs.readFileSync(path.resolve(__dirname, pathProdInfo)).toString()
 
    if (nike == data) {
      console.log('info iguais')
    } else {
      console.log('info diferentes')
      await updateInfo()
      console.log('banco de dados atualizado')
    }
  }

  async function monitorImgLink() {
    const nike:string = JSON.stringify(await arrivalsImgLink())
    const data:string = fs.readFileSync(path.resolve(__dirname, pathProdImg)).toString()
 
    if (nike == data) {
      console.log('img link iguais')
    } else {
      console.log('img link diferentes')
      await updateImgLink()
      console.log('banco de dados atualizado')
    }
  }

  
  async function updateInfo() {
    fs.writeFileSync(path.resolve(
      __dirname, pathProdInfo),
      JSON.stringify(await nikeNewArrivals()))
    }

  async function updateImgLink() {
    fs.writeFileSync(path.resolve(
      __dirname, pathProdImg),
      JSON.stringify(await arrivalsImgLink()))
    }
    
  await updateImgLink()
  
  setInterval(monitorInfo, 5000)
  setInterval(monitorImgLink, 5000)
})();

module.exports = {status}