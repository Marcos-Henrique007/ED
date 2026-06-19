class QuickSort {
    constructor() {
        this.dados = [];
    }

    //função para a ordenação dos dados:
    Ordena(dados = this.dados) {
        if (dados.length <= 1) {
            return dados;
        }

        const pivot = dados[dados.length - 1];

        const left = [];
        const right = [];

        for (let i = 0; i < dados.length - 1; i++) {
            if (dados[i] < pivot) {
                left.push(dados[i]);
            } else {
                right.push(dados[i]);
            }
        }
        return [
            ...this.Ordena(left),
            pivot,
            ...this.Ordena(right)
        ];
    }
}

// Exemplo de uso
const quickSort = new QuickSort();
quickSort.dados = [38, 27, 43, 3, 9, 82, 10];
const sortedDados = quickSort.Ordena();
console.log(sortedDados); // Saída: [3, 9, 10, 27, 38, 43, 82]

export default QuickSort;