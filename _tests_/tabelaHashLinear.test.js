import TabelaHashLinear from "../src/praticas_sala_de_aula/Pratica_aulas_slides/TabelaHashLinear";

describe("TabelaHashLinear", () => {
    let tabela;

    beforeEach(() => {
        tabela = new TabelaHashLinear(10);
    });

    test("inserir e buscar", () => {
        tabela.inserir("nome", "Marcos");
        expect(tabela.buscar("nome")).toBe("Marcos");
    });

    test("remover", () => {
        tabela.inserir("nome", "Marcos");
        tabela.remover("nome");

        expect(tabela.buscar("nome")).toBeNull();
    });
});