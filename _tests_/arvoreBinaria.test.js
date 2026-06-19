import ArvoreBinaria from "../src/praticas_sala_de_aula/Pratica_aulas_slides/ArvoreBinaria";

describe("ArvoreBinaria", () => {

    test("inserção na esquerda e direita", () => {
        const arvore = new ArvoreBinaria(10);

        arvore.inserir(5);
        arvore.inserir(20);

        expect(arvore.esq.valor).toBe(5);
        expect(arvore.dir.valor).toBe(20);
    });

    test("remoção de folha", () => {
        const arvore = new ArvoreBinaria(10);

        arvore.inserir(5);

        arvore.esq = arvore.esq.Delete(5);

        expect(arvore.esq).toBeNull();
    });
});