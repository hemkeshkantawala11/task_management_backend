const taskServiceTest = require('../../services/taskService');
const { Task } = require('../../models');

jest.mock('../../models');

describe('TaskService', () => {
    describe('createTask', () => {
        it('should create a task for a user', async () => {
            const taskData = { title: 'New Task', userId: 1 };
            Task.create.mockResolvedValue(taskData);

            const result = await taskServiceTest.createTask(1, taskData);

            expect(Task.create).toHaveBeenCalledWith(taskData);
            expect(result).toEqual(taskData);
        });
    });

    describe('getTasks', () => {
        it('should return tasks based on filters', async () => {
            const tasks = [{ title: 'Task 1' }, { title: 'Task 2' }];
            Task.findAll.mockResolvedValue(tasks);

            const result = await taskServiceTest.getTasks(1, { status: 'Todo' });

            expect(Task.findAll).toHaveBeenCalledWith({ where: { userId: 1, status: 'Todo' } });
            expect(result).toEqual(tasks);
        });
    });

    describe('updateTask', () => {
        it('should update and return the task', async () => {
            const taskData = { title: 'Updated Task' };
            const task = { id: 1, ...taskData };

            Task.update.mockResolvedValue([1]);
            Task.findByPk.mockResolvedValue(task);

            const result = await taskServiceTest.updateTask(1, taskData);

            expect(Task.update).toHaveBeenCalledWith(taskData, { where: { id: 1 } });
            expect(Task.findByPk).toHaveBeenCalledWith(1);
            expect(result).toEqual(task);
        });
    });

    describe('deleteTask', () => {
        it('should delete the task', async () => {
            Task.destroy.mockResolvedValue(1);

            await taskServiceTest.deleteTask(1);

            expect(Task.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
        });
    });
});
