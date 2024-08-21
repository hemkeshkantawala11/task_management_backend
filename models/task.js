module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM,
            values: ['Todo', 'In Progress', 'Done'],
            defaultValue: 'Todo'
        },
        priority: DataTypes.ENUM('Low', 'Medium', 'High'),
        dueDate: DataTypes.DATE
    });

    Task.associate = function(models) {
        Task.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Task;
};
