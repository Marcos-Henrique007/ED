class SelectionSort {
    constructor() {
        this.dados = [];
    }

    //função para a ordenação dos dados:
    Ordena() {
        for (let i = 0; i < this.dados.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.dados.length; j++) {
                if (this.dados[j] < this.dados[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [this.dados[i], this.dados[minIndex]] = [this.dados[minIndex], this.dados[i]];
            }
        }
    } 
}

// Exemplo de uso
const selectionSort = new SelectionSort();
selectionSort.dados = [38, 27, 43, 3, 9, 82, 10];
selectionSort.Ordena();
console.log(selectionSort.dados); // Saída: [3, 9, 10, 27, 38, 43, 82]