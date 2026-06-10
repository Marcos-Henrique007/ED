class Conjunto {
    constructor() {
        this.elementos = [];
    }

    adicionar(elemnto) {
        if (!this.contem(elemnto)) {
            this.elementos.push(elemnto);
        }
    }

    contem(elemento) {
        return this.elementos.includes(elemento);
    }

    remover(elemento) {
        const index = this.elementos.indexOf(elemento);
        if (index !== -1) {
            this.elementos.splice(index, 1);
        }
    }

    tamanho() {
        return this.elementos.length;
    }

    interseccao(outroConjunto) {
        const resultado = new Conjunto();
        for (const elemento of this.elementos) {
            if (outroConjunto.contem(elemento)) {
                resultado.adicionar(elemento);
            }
        }
        return resultado;
    }

    uniao(outroConjunto) {
        const resultado = new Conjunto();
        for (const elemento of this.elementos) {
            resultado.adicionar(elemento);
        }
        for (const elemento of outroConjunto.elementos) {
            resultado.adicionar(elemento);
        }
        return resultado;
    }

    diferenca(outroConjunto) {
        const resultado = new Conjunto();

        for (const elemento of this.elementos) {
            if (!outroConjunto.contem(elemento)) {
                resultado.adicionar(elemento);
            }
        }
        return resultado;
    }

    subconjunto(outroConjunto) {
        for (const elemento of this.elementos) {
            if (!outroConjunto.contem(elemento)) {
                return false;
            }
        }
        return true;
    }

    toString() {
        return `{ ${this.elementos.join(',') }}`;
    }
}

// Exemplo de uso
const conjuntoA = new Conjunto();
conjuntoA.adicionar(1);
conjuntoA.adicionar(2);
conjuntoA.adicionar(3);

const conjuntoB = new Conjunto();
conjuntoB.adicionar(3);
conjuntoB.adicionar(4);
conjuntoB.adicionar(5);

console.log('Conjunto A:', conjuntoA.toString());
console.log('Conjunto B:', conjuntoB.toString());
console.log('Interseção:', conjuntoA.interseccao(conjuntoB).toString());
console.log('União:', conjuntoA.uniao(conjuntoB).toString());
console.log('Diferença A - B:', conjuntoA.diferenca(conjuntoB).toString());
console.log('A é subconjunto de B?', conjuntoA.subconjunto(conjuntoB));
console.log('B é subconjunto de A?', conjuntoB.subconjunto(conjuntoA));