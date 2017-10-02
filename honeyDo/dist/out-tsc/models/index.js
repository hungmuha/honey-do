"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
if (process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true
    });
}
else {
    var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/honeydo');
}
var User = sequelize.import('./user');
var Task = sequelize.import('./task');
var Game = sequelize.import('./game');
User.belongsTo(Game);
Game.hasMany(User);
Task.belongsTo(Game);
Game.hasMany(Task);
var db = {};
exports.db = db;
db.models = {
    User: User,
    Task: Task,
    Game: Game
};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//# sourceMappingURL=index.js.map