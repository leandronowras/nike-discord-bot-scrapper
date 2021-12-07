import { BrowserSingleton } from "../src/browser/BrowserSingleton"

test.skip("Deve criar um browser", async () => {
  BrowserSingleton.getInstance()
})