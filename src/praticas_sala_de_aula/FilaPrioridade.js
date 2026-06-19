import NoPrioridade from "./NoPrioridade.js";

class FilaPrioridade {
    constructor() {
        this.dados = [];
    }

    add(dado, prioridade) {
        const novo = new NoPrioridade(dado, prioridade);

        let inserido = false;

        for (let i = 0; i < this.dados.length; i++) {
            if (prioridade < this.dados[i].prioridade) {
                this.dados.splice(i, 0, novo);
                inserido = true;
                break;
            }
        }

        if (!inserido) {
            this.dados.push(novo);
        }
    }

    remove() {
        if (this.dados.length === 0) {
            throw new Error("Fila vazia");
        }

        return this.dados.shift();
    }

    isEmpty() {
        return this.dados.length === 0;
    }
}

export default FilaPrioridade;