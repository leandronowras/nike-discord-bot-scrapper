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
  getNewArrivalsInfo () {
    let result:{}[] = [] 

    this.$("div.produto__info").each((index, elem) => {
      let name = this.$(elem).find("a.produto__nome").text() + "--"
      let price = this.$(elem).find("span.produto__preco_por").text() + "--"
      let link = this.$(elem).find("a.produto__nome").prop("href") + "--"

      result.push({name, price, link})
     } 
    )

    return result.slice(0, 4)
  }

  getNewArrivalsImgLink () {
    let result:{}[] = [] 

    this.$("div.produto__imagem").each((index, elem) => {
     let imgNikeLink = this.$(elem).find("img.produto__imagem-principal").prop("src")

     result.push({imgNikeLink})
    })

    return result.slice(0, 4)
  }
}



/*
--- info ---
$("div.produto__info").find("a.produto__nome").text()
$("div.produto__info").find("span.produto__preco_por").text() -> preco total
$("div.produto__info").find("a.produto__nome").prop("href") -> link do primeiro

$("div.produto__info").each((index, elem) => {
  console.log($(elem).find("a.produto__nome").text())
  console.log($(elem).find("span.produto__preco_por").text())
  console.log($(elem).find("a.produto__nome").prop("href"))
})


--- imagens ---
$("div.produto__imagem").find("img.produto__imagem-principal").prop("src")

$("div.produto__imagem").each((index, elem) => {
  console.log($(elem).find("img.produto__imagem-principal").prop("src"))
})
*/