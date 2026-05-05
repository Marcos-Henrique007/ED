class TabelaHash {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.tabela = new Array(tamanho);
    }

    hash(chave) {
        let hash = 0;
        for (let i = 0; i < chave.length; i++) {
            hash = (hash * 31 + chave.charCodeAt(i)) % this.tamanho;
        }
        return hash;
    }

    inserir(chave, valor) {
        const index = this.hash(chave);

        if (this.tabela[index] === undefined) {
            this.tabela[index] = [];
        }

        // Atualiza se já existir
        for (let i = 0; i < this.tabela[index].length; i++) {
            if (this.tabela[index][i].chave === chave) {
                this.tabela[index][i].valor = valor;
                return;
            }
        }

        this.tabela[index].push({ chave, valor });
    }

    buscar(chave) {
        const index = this.hash(chave);

        if (this.tabela[index] !== undefined) {
            for (let i = 0; i < this.tabela[index].length; i++) {
                if (this.tabela[index][i].chave === chave) {
                    return this.tabela[index][i].valor;
                }
            }
        }

        return null;
    }

    remover(chave) {
        const index = this.hash(chave);

        if (this.tabela[index] !== undefined) {
            for (let i = 0; i < this.tabela[index].length; i++) {
                if (this.tabela[index][i].chave === chave) {
                    this.tabela[index].splice(i, 1);
                    return true;
                }
            }
        }

        return false;
    }

    printar() {
        for (let i = 0; i < this.tamanho; i++) {
            if (this.tabela[i] !== undefined) {
                console.log(`Index ${i}:`);
                for (let j = 0; j < this.tabela[i].length; j++) {
                    console.log(`  ${this.tabela[i][j].chave} => ${this.tabela[i][j].valor}`);
                }
            }
        }
    }
}

console.log("=== TESTE ENCADEAMENTO ===");

const tabela = new TabelaHash(3); // pequeno pra forçar colisão

// Inserção
tabela.inserir("a", 1);
tabela.inserir("b", 2);
tabela.inserir("c", 3);

// Colisão proposital
tabela.inserir("aa", 10);

// Atualização
tabela.inserir("a", 99);

// Busca
console.log("Buscar a:", tabela.buscar("a")); // 99
console.log("Buscar b:", tabela.buscar("b")); // 2
console.log("Buscar x:", tabela.buscar("x")); // null

// Remoção
console.log("Remover b:", tabela.remover("b")); // true
console.log("Buscar b:", tabela.buscar("b")); // null

// Remoção inexistente
console.log("Remover z:", tabela.remover("z")); // false

tabela.printar();