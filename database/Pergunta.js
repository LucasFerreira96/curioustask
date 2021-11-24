const Sequelize = require("sequelize");
const { default: ModelManager } = require("sequelize/dist/lib/model-manager");
const connection = require("./database");

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});

Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;