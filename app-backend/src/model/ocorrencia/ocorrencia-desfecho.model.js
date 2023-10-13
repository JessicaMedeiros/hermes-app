const Sequelize = require('sequelize');
const database = require('../../../config/sequelize');
 

const OcorrenciaDesfecho = database.define('ocorrencia', {
    id_ocorrencia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_profissional: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },    
    desfecho: {
        type: Sequelize.TEXT,
    },
    data_desfecho: {
        type: Sequelize.STRING,
    }, 
    data_finalizada: {
        type: Sequelize.TEXT,
    }, 
    utilizou_ambulancia: {
        type: Sequelize.BOOLEAN,
    }, 
    ativa: {
        type: Sequelize.BOOLEAN,
    }, 
},{
    timestamps: false
  })
 
module.exports = OcorrenciaDesfecho;