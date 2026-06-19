import BubbleSort from "../src/praticas_sala_de_aula/Pratica_aulas_slides/BubbleSort";

describe("BubbleSort", () => {
    test("ordena vetor", () => {
        const b = new BubbleSort();
        b.dados = [5, 3, 8, 1];

        expect(b.Ordena()).toEqual([1, 3, 5, 8]);
    });
});