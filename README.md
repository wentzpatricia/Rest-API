# API Library

Após clonar o repositório em sua máquina, acesse o terminal dentro da pasta do projeto e siga os seguintes passos.

## 🛠️ Preparando o ambiente:

1. 🔮 Primeiro instale as dependencias do projeto:

```bash
# caso use yarn
yarn install
# caso use npm
npm install
```

2. 🚧 Na pasta root do projeto existe o arquivo db.sql ele é um exemplo de script para criação das tabelas, você pode utilizar ele depois de criar sua base de dados.

3. 📝 Crie um arquivo .env na pasta root do seu projeto e coloque as variáveis de ambiente como mostra no exemplo .env.example:

Porta que rodará os processos da aplicação

```
PORT='YOUR_PORT_HERE'
```

Informações do Banco de Dados - MySQL

```
MYSQL_HOST='YOUR_HOST_HERE'
MYSQL_USER='YOUR_USER_HERE'
MYSQL_PASSWORD='YOUR_PASSWORD_HERE'
MYSQL_DATABASE='YOUR_DATABASE_HERE'
```

## 🚀 Inicie o projeto:

```bash
# caso user yarn
yarn start
# caso use npm
npm start
```
