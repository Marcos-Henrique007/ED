import InsertionSort from "../src/praticas_sala_de_aula/Pratica_aulas_slides/InsertionSort";

describe("InsertionSort", () => {
    test("ordena vetor", () => {
        const s = new InsertionSort();
        s.dados = [5, 3, 8, 1];

        expect(s.Ordena()).toEqual([1, 3, 5, 8]);
    });
});