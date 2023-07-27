const sequelize = require('../config/connection');
const { User, Poetry } = require('../models');

const userData = require('./userData.json');
const poetryData = require('./poetryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const poetry of poetryData) {
    await Poetry.create({
      ...poetry,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
