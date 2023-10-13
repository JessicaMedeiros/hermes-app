const Sequelize = require('sequelize');
const database = require('../../../config/sequelize');
 
const Paciente = database.define('paciente', {
    id_paciente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_paciente: {
        type: Sequelize.STRING,
        allowNull: false,
    },    
    ativo: {
        type: Sequelize.BOOLEAN,
    },      
},{
    timestamps: false
  })
 
module.exports = Paciente;