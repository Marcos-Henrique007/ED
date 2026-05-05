class TabelaHashLinear {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.tabela = new Array(tamanho).fill(null);
        this.DELETADO = { deletado: true };
    }

    hash(chave) {
        let hash = 0;
        for (let i = 0; i < chave.length; i++) {
            hash = (hash * 31 + chave.charCodeAt(i)) % this.tamanho;
        }
        return hash;
    }

    inserir(chave, valor) {
        let index = this.hash(chave);

        while (
            this.tabela[index] !== null &&
            this.tabela[index] !== this.DELETADO &&
            this.tabela[index].chave !== chave
        ) {
            index = (index + 1) % this.tamanho;
        }

        this.tabela[index] = { chave, valor };
    }

    buscar(chave) {
        let index = this.hash(chave);
        let inicio = index;

        while (this.tabela[index] !== null) {
            if (
                this.tabela[index] !== this.DELETADO &&
                this.tabela[index].chave === chave
            ) {
                return this.tabela[index].valor;
            }

            index = (index + 1) % this.tamanho;

            if (index === inicio) break;
        }

        return null;
    }

    remover(chave) {
        let index = this.hash(chave);
        let inicio = index;

        while (this.tabela[index] !== null) {
            if (
                this.tabela[index] !== this.DELETADO &&
                this.tabela[index].chave === chave
            ) {
                this.tabela[index] = this.DELETADO;
                return true;
            }

            index = (index + 1) % this.tamanho;

            if (index === inicio) break;
        }

        return false;
    }

    printar() {
        for (let i = 0; i < this.tamanho; i++) {
            if (this.tabela[i] === null) {
                console.log(i, "vazio");
            } else if (this.tabela[i] === this.DELETADO) {
                console.log(i, "DELETADO");
            } else {
                console.log(i, `${this.tabela[i].chave} => ${this.tabela[i].valor}`);
            }
        }
    }
}

console.log("=== TESTE SONDAGEM LINEAR ===");

const tabela2 = new TabelaHashLinear(5);

// Inserção
tabela2.inserir("a", 1);
tabela2.inserir("b", 2);
tabela2.inserir("c", 3);

// Colisão
tabela2.inserir("aa", 10);

// Atualização
tabela2.inserir("a", 100);

// Busca
console.log("Buscar a:", tabela2.buscar("a")); // 100
console.log("Buscar c:", tabela2.buscar("c")); // 3
console.log("Buscar x:", tabela2.buscar("x")); // null

// Remoção
console.log("Remover a:", tabela2.remover("a")); // true
console.log("Buscar a:", tabela2.buscar("a")); // null

// Teste importante (cluster após remoção)
tabela2.inserir("novo", 999);
console.log("Buscar novo:", tabela2.buscar("novo"));

// Remoção inexistente
console.log("Remover y:", tabela2.remover("y")); // false

tabela2.printar();