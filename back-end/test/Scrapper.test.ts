import { NikeScrapper } from "../src/Scrapper"

test.skip("deve retornar um array com os h1s do site", () => {
  const html = "<html><head></head><body><h1>oi discord!!!</h1></body></html>"
  const scrapper = new NikeScrapper(html)

  expect(scrapper.geth1Tags()).toBe(["oi discord!!!"])
})