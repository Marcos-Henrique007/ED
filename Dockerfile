# Usa imagem oficial do Node
FROM node:18

# Define diretório dentro do container
WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Comando para rodar o projeto
CMD ["node", "src/index.js"]