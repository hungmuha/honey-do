import * as Sequelize from 'sequelize';
var sequelize = new Sequelize('postgres://actioncustomer@localhost:5432/honeydo');

var User = sequelize.import('./user');
var Task = sequelize.import('./task');
var Game = sequelize.import('./game');


User.belongsTo(Game);
Game.hasMany(User);
Task.belongsTo(Game);
Game.hasMany(Task);


const db = <any>{};
db.models= {
	User,
	Task,
	Game
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export{db};