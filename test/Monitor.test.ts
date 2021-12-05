import { Monitor } from "../src/Monitor"
import puppeteer from 'puppeteer'

// ok
test.skip('deve retornar o html de uma pagina', async () => {  
  const monitor = new Monitor("http://localhost:3000")
  
  expect(await monitor.loadPage()).toBe("<html><head></head><body><h1>Hello</h1></body></html>")
})

// ok
test.skip("Deve comparar se dois htmls sao diferentes", async () => {
  const monitor = new Monitor("http://localhost:3000")
  await monitor.loadPage() 

  expect(monitor.html).not.toBe('qualquer coisa')
})

test("Deve atualizar o html do site", async () => {
  
})