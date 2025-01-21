const { Sequelize } = require('sequelize');

// Use the connection URL provided
const sequelize = new Sequelize(
  'postgresql://postgres.agpqtoxykerinjdnaaku:Besar321!!!@aws-0-eu-central-1.pooler.supabase.com:6543/postgres',
  {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Necessary for some SSL configurations
      },
    },
  }
);

module.exports = sequelize;

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log('Database connection established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));
