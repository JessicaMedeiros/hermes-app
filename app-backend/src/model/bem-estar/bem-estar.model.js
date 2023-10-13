const Sequelize = require('sequelize');
const database = require('../../../config/sequelize');
 

const BemEstar = database.define('nivelbemestar', {
    id_bem_estar: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },    
    nota: {
        type: Sequelize.INTEGER,
    },
    observacao: {
        type: Sequelize.TEXT,
    }, 
    updated_at: {
        type: Sequelize.STRING 
    } 
},{
    timestamps: false
  })
 
module.exports = BemEstar;