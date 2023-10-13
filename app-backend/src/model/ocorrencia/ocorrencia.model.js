const Sequelize = require('sequelize');
const database = require('../../../config/sequelize');
 

const Ocorrencia = database.define('ocorrencia', {
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
    im1_buffer: {
        type: Sequelize.BLOB
    },
    im1_originalname: {
        type: Sequelize.STRING,
    }, 
    im1_mimetype: {
        type: Sequelize.STRING,
    }, 
    im1_size: {
        type: Sequelize.INTEGER,
    }, 
    im2_buffer:{
        type: Sequelize.BLOB,
    }, 
    im2_originalname: {
        type: Sequelize.STRING,
    }, 
    im2_mimetype: {
        type: Sequelize.STRING,
    }, 
    im2_size: {
        type: Sequelize.INTEGER,
    }, 
    updated_at: {
        type: Sequelize.STRING 
    } , 
    ativa: {
        type: Sequelize.BOOLEAN 
    },   
},{
    timestamps: false
  })
 
module.exports = Ocorrencia;