import { BrowserSingleton } from "../src/browser/BrowserSingleton"

test("Deve criar um browser", async () => {
  BrowserSingleton.getInstance()
})