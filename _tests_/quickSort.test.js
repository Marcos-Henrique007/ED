import QuickSort from "../src/praticas_sala_de_aula/Pratica_aulas_slides/QuickSort";

describe("QuickSort", () => {

    test("ordena vetor", () => {
        const qs = new QuickSort();

        qs.dados = [38, 27, 43, 3, 9, 82, 10];

        expect(qs.Ordena()).toEqual([
            3, 9, 10, 27, 38, 43, 82
        ]);
    });
});