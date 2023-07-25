const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const ToDo = sequelize.define('toDo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  toDoName: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = ToDo;
