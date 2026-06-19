import FilaCircular from "../src/praticas_sala_de_aula/filaCircular";

describe("FilaCircular", () => {

    test("enqueue e front", () => {
        const fila = new FilaCircular(3);

        fila.enqueue(10);

        expect(fila.front()).toBe(10);
    });

    test("dequeue", () => {
        const fila = new FilaCircular(3);

        fila.enqueue(10);

        expect(fila.dequeue()).toBe(10);
    });

    test("fila cheia", () => {
        const fila = new FilaCircular(3);

        fila.enqueue(1);
        fila.enqueue(2);
        fila.enqueue(3);

        expect(fila.isFull()).toBe(true);
    });
});