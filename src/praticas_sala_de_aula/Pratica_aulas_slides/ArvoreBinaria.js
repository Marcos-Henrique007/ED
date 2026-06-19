class ArvoreBinaria {
    constructor(valor) {
        this.valor = valor;
        this.dir = null;
        this.esq = null;
    }

    inserir(valor) {
        if(valor < this.valor) {
            if(this.esq === null) {
                this.esq = new ArvoreBinaria(valor);
            }else {
                this.esq.inserir(valor);
            }
        }else {
            if(this.dir === null) {
                this.dir = new ArvoreBinaria(valor);
            }else {
                this.dir.inserir(valor);
            }
        }
    }

    Printar() {
        if(this.esq !== null) {
            this.esq.Printar();
        }
        console.log(this.valor);
        if(this.dir !== null) {
            this.dir.Printar();
        }
    }

    Delete(valor) {
        if(valor < this.valor) {
            if(this.esq !== null) {
                this.esq = this.esq.Delete(valor);
            }
        }else if(valor > this.valor) {
            if(this.dir !== null) {
                this.dir = this.dir.Delete(valor);
            }
        } else {
            if(this.esq === null && this.dir === null) {
                return null;
            } else if(this.esq === null) {
                return this.dir;
            } else if(this.dir === null) {
                return this.esq;
            } else {
                let minLadoDir = this.dir;
                while(minLadoDir.esq !== null) {
                    minLadoDir = minLadoDir.esq;
                }
                this.valor = minLadoDir.valor;
                this.dir = this.dir.Delete(minLadoDir.valor);
            }
        }
        return this;
    }
}

let arvore = new ArvoreBinaria(10);

arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(3);
arvore.inserir(7);

console.log("inserindo:");
arvore.Printar();

arvore = arvore.Delete(10);

console.log("deletando: ");
arvore.Printar();

export default ArvoreBinaria;