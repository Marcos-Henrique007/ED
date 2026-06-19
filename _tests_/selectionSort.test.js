import SelectionSort from "../src/praticas_sala_de_aula/Pratica_aulas_slides/SelectionSort";

describe("SelectionSort", () => {
    test("ordena vetor", () => {
        const s = new SelectionSort();

        s.dados = [38, 27, 43, 3, 9];

        s.Ordena();

        expect(s.dados).toEqual([3, 9, 27, 38, 43]);
    });
});