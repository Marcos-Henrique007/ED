class QuickSort {
    constructor() {
        this.dados = [];
    }

    //função para a ordenação dos dados:
    Ordena() {
        if (this.dados.length <= 1) {
            return this.dados;
        }
        const pivot = this.dados[this.dados.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < this.dados.length - 1; i++) {
            if (this.dados[i] < pivot) {
                left.push(this.dados[i]);
            } else {
                right.push(this.dados[i]);
            }
        }
        return [...new QuickSort().Ordena(left), pivot, ...new QuickSort().Ordena(right)];
    }
}

// Exemplo de uso
const quickSort = new QuickSort();
quickSort.dados = [38, 27, 43, 3, 9, 82, 10];
const sortedDados = quickSort.Ordena();
console.log(sortedDados); // Saída: [3, 9, 10, 27, 38, 43, 82]