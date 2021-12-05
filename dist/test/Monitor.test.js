"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Monitor_1 = require("../src/Monitor");
// ok
test.skip('deve retornar o html de uma pagina', async () => {
    const monitor = new Monitor_1.Monitor("http://localhost:3000");
    expect(await monitor.loadPage()).toBe("<html><head></head><body><h1>Hello</h1></body></html>");
});
test("Deve comparar se dois htmls sao diferentes", async () => {
    const monitor = new Monitor_1.Monitor("http://localhost:3000");
    await monitor.loadPage();
    console.log(monitor.html);
    expect(monitor.html).not.toBe('qualquer coisa');
});
