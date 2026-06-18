# 📚 Estrutura de Dados (ED) - UFRN

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Repo Size](https://img.shields.io/github/repo-size/Marcos-Henrique007/ED)
![Last Commit](https://img.shields.io/github/last-commit/Marcos-Henrique007/ED)

Repositório desenvolvido para armazenar atividades, listas de exercícios e implementações realizadas durante a disciplina de **Estrutura de Dados (ED)** da Universidade Federal do Rio Grande do Norte (UFRN).

O objetivo deste projeto é consolidar o aprendizado dos principais conceitos de estruturas de dados, registrar a evolução acadêmica ao longo da disciplina e servir como material de consulta para estudos futuros.

---

## 🎯 Objetivos

- Praticar conceitos fundamentais de Estrutura de Dados;
- Implementar estruturas e algoritmos estudados em sala de aula;
- Desenvolver habilidades de resolução de problemas;
- Manter um histórico da evolução durante a disciplina;
- Construir um portfólio acadêmico para consulta e revisão.

---

## 📂 Estrutura do Repositório

```text
ED/
├── src/
│   ├── Hello.js
│   ├── fila.js
│   ├── pilha.js
│   └── ...
├── listas/
├── documentos/
└── README.md
```

### 📌 Diretórios

#### 📝 Listas
Contém listas de exercícios resolvidas ao longo da disciplina.

#### 💻 Código-Fonte
Implementações práticas de estruturas de dados e algoritmos.

Exemplos:

- Pilhas
- Filas
- Listas
- Algoritmos de ordenação
- Algoritmos de busca

#### 📦 Arquivos Auxiliares
Documentos, testes e materiais complementares.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (Node.js)
- Docker
- Git
- GitHub
- Visual Studio Code

---

## 🚀 Executando o Projeto

Os exercícios podem ser executados utilizando Docker.

### Executar um único arquivo

```bash
docker run estrutura-dados-js node src/Hello.js
```

Substitua `Hello.js` pelo arquivo que deseja executar.

Exemplo:

```bash
docker run estrutura-dados-js node src/fila.js
```

---

### Executar vários testes no mesmo container

Para acessar o terminal do container:

```bash
docker run -it estrutura-dados-js sh
```

Após entrar no container, execute quantos arquivos desejar:

```bash
node src/fila.js
node src/pilha.js
node src/Hello.js
```

---

## 📖 Exemplos de Execução

### Conversão para Notação Pós-Fixa (RPN)

**Entrada**

```text
(a+(b*c))
```

**Saída**

```text
abc*+
```

### Pilha de Pratos

**Saída**

```text
20
15
10
5
null
```

---

## 📚 Aplicações dos Exercícios

- Revisão para avaliações;
- Consulta de implementações de estruturas de dados;
- Estudo de algoritmos clássicos;
- Prática de lógica de programação;
- Aprendizado de JavaScript utilizando Node.js.

---

## 📅 Atualizações

O repositório é atualizado continuamente conforme o avanço da disciplina e a resolução de novas atividades.

---

## 👨‍💻 Autor

**Marcos Henrique Barbosa Pessoa**

📧 E-mail: marcoshenriqueufrn@gmail.com

🐙 GitHub: https://github.com/Marcos-Henrique710

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais. Sinta-se à vontade para utilizá-lo como material de estudo, respeitando os créditos do autor.

Este projeto está licenciado sob a Licença MIT.

Consulte o arquivo [LICENSE](LICENSE) para mais informações.
