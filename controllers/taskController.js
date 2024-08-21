const taskService = require('../services/taskService');

exports.createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.user.id, req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks(req.user.id, req.query);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.taskId, req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.taskId);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
