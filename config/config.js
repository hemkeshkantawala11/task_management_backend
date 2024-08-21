module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQLROOTPASSWORD,
    database: 'Task_Manager',
    host: 'localhost',
    dialect: 'mysql'
  }
};