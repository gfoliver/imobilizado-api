# Imobilizado API

## Desenvolvendo

* Instalar o [NodeJS](https://nodejs.org);
* Instalar o MySQL ([xampp](https://www.apachefriends.org/pt_br/index.html) ou outra maneira);
* Clonar o repositório;
* Rodar `npm install`;
* Copiar o arquivo `ormconfig.example.json` para um novo arquivo chamado `ormconfig.json`;
* Editar esse arquivo `ormconfig.json` com as configurações do seu MySQL;
* Rodar as migrations com o comando `npm run typeorm migration:run`;
* Rodar as seeds com o comando `npm run seed:run`;
* Iniciar o servidor local com o comando `npm run dev`;
