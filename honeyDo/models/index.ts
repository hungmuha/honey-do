import * as Sequelize from 'sequelize';

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
  	dialect: 'postgres',
  	protocol: 'postgres',
  	logging: true
  })
}else{
var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/honeydo');
}

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