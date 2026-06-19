import ListaLigada from "../src/praticas_sala_de_aula/listaLigada";

describe("ListaLigada", () => {

    test("inserir", () => {
        const lista = new ListaLigada();

        lista.inserir(10);
        lista.inserir(20);

        expect(lista.buscar(20)).toBe(true);
    });

    test("remover", () => {
        const lista = new ListaLigada();

        lista.inserir(10);
        lista.remover(10);

        expect(lista.buscar(10)).toBe(false);
    });
});