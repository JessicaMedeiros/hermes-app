const Sequelize = require('sequelize');
const database = require('../../../config/sequelize');
 

const OcorrenciaSemFile = database.define('ocorrencia', {
    id_ocorrencia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },    
    data_ocorrencia: {
        type: Sequelize.STRING,
    },
    hora_ocorrencia: {
        type: Sequelize.STRING,
    }, 
    medicacao_desc: {
        type: Sequelize.TEXT,
    }, 
    sintomas: {
        type: Sequelize.TEXT,
    }, 
    updated_at: {
        type: Sequelize.STRING,
    }, 
    updated_at: {
        type: Sequelize.STRING 
    }, 
    ativa: {
        type: Sequelize.BOOLEAN 
    },  
    im1_originalname: {
        type: Sequelize.STRING,
    }, 
    im2_originalname: {
        type: Sequelize.STRING,
    },  
},{
    timestamps: false
  })
 
module.exports = OcorrenciaSemFile;