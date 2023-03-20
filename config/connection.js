require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : (process.env.MYSQL_URL)
    ? new Sequelize(process.env.MYSQL_URL)
    : console.log("please add a database url to the enviornment variable")

module.exports = sequelize;
