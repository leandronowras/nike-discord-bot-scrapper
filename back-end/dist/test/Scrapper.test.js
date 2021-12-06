"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scrapper_1 = require("../src/Scrapper");
const mockTenis = [
    'Tênis Nike Air Zoom Pegasus 38 "Made From Sport" Masculino',
    'Tênis Nike React Infinity Run Flyknit 2 "Made From Sport" Masculino',
    'Tênis Nike Air Zoom Pegasus 38 A.I.R. Kelly Anna London Masculino',
    'Tênis Nike Air Zoom Tempo NEXT% Masculino',
    'Tênis Nike Zoom Span 3 Masculino',
    'Tênis Nike Air Zoom Pegasus 38 FlyEase Masculino',
    'Tênis Nike Renew Run 2 Masculino',
    'Tênis Nike Air Zoom Pegasus 38 Masculino',
    'Tênis Nike ZoomX Vaporfly Next% 2 Masculino',
    'Tênis Nike ZoomX Vaporfly Next% 2 Masculino',
    'Tênis Nike React Infinity Run Flyknit 2 Masculino',
    'Tênis Nike ZoomX Invincible Run Flyknit Masculino',
    'Tênis Nike Air Zoom Division Masculino',
    'Tênis Nike Quest 4 Masculino',
    'Tênis Nike Downshifter 11 Masculino',
    'Tênis Nike Air Zoom Vomero 15 Masculino',
    'Tênis Nike Air Zoom Pegasus 38 Masculino',
    'Tênis Nike Revolution 5 Premium Masculino',
    'Tênis Nike Winflo 8 Masculino',
    'Tênis Nike Air Zoom Winflo 7 Masculino',
    'Tênis Nike Zoom Prevail Masculino',
    'Tênis Nike Run Swift 2 Masculino',
    'Tênis Nike Air Zoom Terra Kiger 7 Masculino',
    'Tênis Nike Revolution 6 Next Nature Masculino'
];
const url = 'https://www.nike.com.br/masculino/calcados/corrida?p=1&Fabricante=&Filtros=&cor=&tamanho=&precode=&precoate=&ofertas=&ordenacao=3&limit=24&ordemFiltro=&site_id=';
test.skip("Deve listar tenis da nike disponiveis", async () => {
    const nikeScrapper = new Scrapper_1.Scrapper(url);
    const tenis = nikeScrapper.getProductsTitle();
    const mockedTenis = mockTenis;
    expect(tenis).toBe(mockedTenis);
});
