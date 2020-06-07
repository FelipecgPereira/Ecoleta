
<h1 align="center">Projeto NodeJS :rocket:  </h1>
<h1 align="center">
<img alt="GoBarber" src="https://user-images.githubusercontent.com/35371615/83633748-d1eec980-a577-11ea-89c2-809ed6fb34ff.png"/>
</h1>
<h1 align="center">:recycle: Ecoleta :recycle:</h1>
<h3 align="center">Back-End</h3>


## Sobre Aplicação :dart:
  Api de interação  de pontos de coletas para reciclagem, contruido na semana NEXT LEVEL WEEK da
  <a href="https://rocketseat.com.br/">rocketseat</a> :rocket:, possibilitando rotas de cadastros, listagem fazendo uso de metodos HTTP,
  tecnologias abordadas typescript, node, express, knex entre outras.
  
## Clients :dart:
- <a href="https://github.com/FelipecgPereira/Ecoleta-frontend">Ecoleta-WEB</a> 
- <a href="https://github.com/FelipecgPereira/Ecoleta-mobile">Ecoleta-MOBILE</a> 

## Rotas :dart:

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








