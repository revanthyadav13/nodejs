const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const ToDosDone = sequelize.define('toDosDone', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
 toDoName:{
    type: Sequelize.STRING,
    allowNull: false
 },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    tableName: 'toDosDone'
  }
  );

module.exports = ToDosDone;
