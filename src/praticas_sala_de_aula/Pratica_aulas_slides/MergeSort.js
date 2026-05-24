class MergeSort {
    constructor() {
        this.dados = [];
    }

    mergeSort(dados) {
        if (dados.length <= 1) {
            return dados;
        }
        const meio = Math.floor(dados.length / 2);
        const esquerda = this.mergeSort(dados.slice(0, meio));
        const direita = this.mergeSort(dados.slice(meio));
        return this.merge(esquerda, direita);

    }

    merge(esquerda, direita) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < esquerda.length && j < direita.length) {
            if (esquerda[i] < direita[j]) {
                result.push(esquerda[i]);
                i++;
            } else {
                result.push(direita[j]);
                j++;
            }
        }

        // Adiciona os elementos restantes de uma das listas
        return result.concat(esquerda.slice(i)).concat(direita.slice(j));
    }
}

// Exemplo de uso
const mergeSort = new MergeSort();
const dados = [38, 27, 43, 3, 9, 82, 10];
const sortedDados = mergeSort.mergeSort(dados);
console.log(sortedDados); // Saída: [3, 9, 10, 27, 38, 43, 82]