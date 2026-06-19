import Conjunto from "../src/praticas_sala_de_aula/Conjunto";

describe("Conjunto", () => {

    test("adicionar elementos", () => {
        const c = new Conjunto();

        c.adicionar(1);
        c.adicionar(2);

        expect(c.tamanho()).toBe(2);
    });

    test("não permite duplicados", () => {
        const c = new Conjunto();

        c.adicionar(1);
        c.adicionar(1);

        expect(c.tamanho()).toBe(1);
    });

    test("união", () => {
        const a = new Conjunto();
        const b = new Conjunto();

        a.adicionar(1);
        a.adicionar(2);

        b.adicionar(2);
        b.adicionar(3);

        expect(a.uniao(b).tamanho()).toBe(3);
    });

    test("interseção", () => {
        const a = new Conjunto();
        const b = new Conjunto();

        a.adicionar(1);
        a.adicionar(2);

        b.adicionar(2);
        b.adicionar(3);

        expect(a.interseccao(b).contem(2)).toBe(true);
    });
});