module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("task", {

		task: {
			type: Sequelize.STRING,
			field: 'task',
			allowNull: false
		}
	});
	return model;
};