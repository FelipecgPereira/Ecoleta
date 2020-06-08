

<h1 align="center">
<img alt="GoBarber" src="https://user-images.githubusercontent.com/35371615/83633748-d1eec980-a577-11ea-89c2-809ed6fb34ff.png"/>
</h1>
<h1 align="center">:recycle: Ecoleta :recycle:</h1>



## Sobre Aplicação :dart:
  Projeto contruido na semana NEXT LEVEL WEEK da <a href="https://rocketseat.com.br/">rocketseat</a> :rocket:, com objetivo de cadastro de pontos de coletas e mapeamento desses pontos.
  Tecnologias utilizada para contrução da aplicação foram <a href="https://nodejs.org/en/download/">NodeJs</a> para o Back-end,<a href="https://pt-br.reactjs.org/"> ReactJS</a> para Front-End e <a href="https://reactnative.dev/">React-Native</a> para mobile.
 
## Back-End :dart:

A api foi desenvolvida usando typescript tambem faz uso de tecnologias como express, knex entre outras.

### Rotas 

### GET 
- `GET /items` : Lista todos os items registrados na base
- `GET /points/:id` : Lista o ponto de coleta filtrado por ID usando o REQUEST.PARAMS
- `GET /points` : Lista os pontos de coleta, pode fazer uso de três  RESQUEST.QUERY são CITY,UF e ITEMS


### POST

- `POST /points ` : Cadastra um novo ponto de coleta, na base de dados.


## Exemplo de uso :dart:


## Configuração para Desenvolvimento :wrench:
Apos clonar o projeto execute o seguinte comando 
> npm install

Caso utilize o gerenciador de pacotes Yarn, execulte o sequinte comando

> yarn 

## Scripts de execução :page_with_curl:

A aplicação faz uso de Query build para executar ações no banco de dados, para isso a dependencia utilizada para desenvolvimento 
foi o <a href="http://knexjs.org/">KNEX.JS</a>.

### Para criação de banco de dados e tabelas foi utilizado o conceito de migrates. :hammer:

> npx knex  --knexfile knexfile.ts migrate:latest

ou Script de execução do package.json

> npx knex:migrate

Caso utilize o gerenciador de pacotes Yarn, execulte o sequinte comando

> yarn knex  --knexfile knexfile.ts migrate:latest

ou Script de execução do package.json

> yarn knex:migrate

### Aplicação faz uso de SEEDS :hammer:

> npx knex --knexfile knexfile.ts seed:run

ou Script de execução do package.json

> npx knex:seed

Caso utilize o gerenciador de pacotes Yarn, execulte o sequinte comando

> yarn knex --knexfile knexfile.ts seed:run

ou Script de execução do package.json

> yarn knex:seed

### Start de aplicação :rocket:

> npx ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts

ou Script de execução do package.json

> npx dev

Caso utilize o gerenciador de pacotes Yarn, execulte o sequinte comando

> yarn ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts

ou Script de execução do package.json

> yarn dev


## Front-End :dart:

Todo front faz uso do React com typescript.

## Mobile :dart:

Mobile faz uso React-native com typescript usando tambem o <a href="https://expo.io/">expo</a> para desenvolvimento.







