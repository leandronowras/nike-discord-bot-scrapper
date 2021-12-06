// fazer o monitor e depois o observer e depois ui do discord

import { BrowserSingleton } from "./browser/BrowserSingleton";

export class Monitor {
  constructor(public html: any) {}

  async update(page: any) {
    await page.reload()

    if (this.html !== await page.content()){
      this.html = await page.content()
    }
  }
}