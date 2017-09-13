import * as Sequelize from 'sequelize';
var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/honeydo');

var User = sequelize.import('./user');
var Task = sequelize.import('./task');

User.belongsToMany(Task,{through:'JoinTask'});
Task.belongsToMany(User,{through:'JoinTask'});

const db = {};
db.models= {
	User,
	Task
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;