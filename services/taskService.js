const { Task } = require('../models');

exports.createTask = async (userId, taskData) => {
    taskData.userId = userId;
    const task = await Task.create(taskData);
    return task;
};

exports.getTasks = async (userId, filters) => {
    const where = { userId };
    if (filters.status) where.status = filters.status;
    if (filters.priority) where.priority = filters.priority;
    if (filters.dueDate) where.dueDate = filters.dueDate;

    const tasks = await Task.findAll({ where });
    return tasks;
};

exports.updateTask = async (taskId, taskData) => {
    await Task.update(taskData, { where: { id: taskId } });
    const task = await Task.findByPk(taskId);
    return task;
};

exports.deleteTask = async (taskId) => {
    await Task.destroy({ where: { id: taskId } });
};
