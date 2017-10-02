module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("task", {
        task: {
            type: Sequelize.STRING,
            field: 'task',
            allowNull: false
        },
        point: {
            type: Sequelize.INTEGER,
            field: 'point'
        }
    });
    return model;
};
//# sourceMappingURL=task.js.map