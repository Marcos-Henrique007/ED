import FilaPrioridade from "../src/praticas_sala_de_aula/FilaPrioridade";

describe("FilaPrioridade", () => {

    test("remove menor prioridade primeiro", () => {
        const fila = new FilaPrioridade();

        fila.add("normal", 5);
        fila.add("urgente", 1);

        expect(fila.remove().dado).toBe("urgente");
    });

    test("fila vazia", () => {
        const fila = new FilaPrioridade();

        expect(fila.isEmpty()).toBe(true);
    });
});