dar reload no browser e nao no banco de dados

separar paths por variaveis de ambiente no package.json


esperar imagens carregarem
  - https://stackoverflow.com/questions/46160929/puppeteer-wait-for-all-images-to-load-then-take-screenshot
    - await page.goto('https://www.digg.com/', {"waitUntil" : "networkidle0"});