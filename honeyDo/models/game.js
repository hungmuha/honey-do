module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("game", {
		gameName: {
			type: Sequelize.STRING,
			field: 'gameName',
			allowNull: false
		}
	});
	return model;
};