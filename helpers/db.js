const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DIALECT,
  process.env.DB_DIALECT,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging:false,
    port:process.env.DB_PORT
  }
);

module.exports = sequelize;
