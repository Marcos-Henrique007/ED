import TabelaHash from "../src/praticas_sala_de_aula/Pratica_aulas_slides/TabelaHash";

describe("TabelaHash", () => {
    let tabela;

    beforeEach(() => {
        tabela = new TabelaHash(10);
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

    test("atualizar valor", () => {
        tabela.inserir("nome", "Marcos");
        tabela.inserir("nome", "Henrique");

        expect(tabela.buscar("nome")).toBe("Henrique");
    });
});