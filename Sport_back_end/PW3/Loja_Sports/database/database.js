/*IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');


/*
CRIAÇÃO DA INSTANCIA DE CONEXAO COM O BANCO DADOS COM O USO DO 
SEQUELIZE.

1 - NOME DO BANCO DE DADOS - STRING
2 - USUARIO DO BANCO DE DADOS - STRING
3 - SENHA DO BANCO DE DADOS - STRING
4 - JSON QUE DETERMINA AS CONFIGURAÇÕES DE CONEXÃO
        4.1 - LOCAL ONDE O BANCO ESTÁ RODANDO (locahost)
        4.2 - DIALETO DO BANCO DE DADOS
*/

const connection = new Sequelize(
    'sports_bd',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'

    }
);

module.exports = connection;