require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : (process.env.MYSQL_URL)
    ? new Sequelize(process.env.MYSQL_URL)
    : (proces.env.DB_NAME && process.env.DB_PASSWORD && process.env.DB_USER)?
    new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      }}) 
    : console.log("You need to add environment varialbes for database connection");

module.exports = sequelize;
