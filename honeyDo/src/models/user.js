module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("user", {

		userName: {
			type: Sequelize.STRING,
			field: 'userName',
			allowNull: false
		},
		score: {
			type: Sequelize.INTEGER,
			filed: 'score',
		}
	});
	return model;
};