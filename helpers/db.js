const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'Besar321!!!',
  {
    host: 'db.agpqtoxykerinjdnaaku.supabase.co',
    dialect: 'postgres',
    logging:false,
    port:6543
  }
);

module.exports = sequelize;
