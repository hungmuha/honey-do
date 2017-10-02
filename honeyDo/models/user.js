module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("user", {

		userName: {
			type: Sequelize.STRING,
			field: 'userName',
			allowNull: false
		},
		image: {
			type:Sequelize.STRING
		},
		score: {
			type: Sequelize.INTEGER,
			filed: 'score',
			defaultValue: 0
		}
	});
	return model;
};