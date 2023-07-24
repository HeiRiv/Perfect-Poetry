const User = require('./User');
const Poetry = require('./Poetry');

User.hasMany(Poetry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Poetry.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project };
