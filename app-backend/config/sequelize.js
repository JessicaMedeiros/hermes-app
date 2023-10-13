const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

var sequelize;

if(process.env.NODE_ENV == "production"){
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        },
        define: {
            freezeTableName: true,
          },
      }
    );
    
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
}else{
    sequelize = new Sequelize(
        process.env.PG_DATABASE,
        process.env.PG_USER,
        process.env.PG_PASSWORD,
        {
          port: process.env.PORT,
          dialect: "postgres",
          define: {
            freezeTableName: true,
          },
          
        }
      );
      
}




  module.exports = sequelize;