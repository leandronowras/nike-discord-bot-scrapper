import cheerio from 'cheerio'

interface Scrapper {
  geth1Tags(): void
}

export class NikeScrapper implements Scrapper {
  $: typeof cheerio;

  public arrivals = []

  constructor(public html: string) {
    this.$ = cheerio.load(this.html);
  }

  geth1Tags () {
    const result: string[] = []

    this.$("h1").each((index, elem) => { 
      let h1s = (this.$(elem).text())
      result.push(h1s)
    })


    return result
  }
  getNewArrivals() {
    let result:{}[] = [] 

    this.$("div.produto__info").each((index, elem) => {
      let name = this.$(elem).find("a.produto__nome").text()
      let price = this.$(elem).find("span.produto__preco_por").text()

      result.push({name: name, price: price})
     }  
    )

    return result
  }
}



/*
$("div.produto__info").find("a.produto__nome").text()
$("div.produto__info").find("span.produto__preco_por").text() -> preco total

*/