import MergeSort from "../src/praticas_sala_de_aula/Pratica_aulas_slides/MergeSort";

describe("MergeSort", () => {
    test("ordena vetor", () => {
        const m = new MergeSort();

        expect(
            m.mergeSort([38, 27, 43, 3, 9, 82, 10])
        ).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });
});