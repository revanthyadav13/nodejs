const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const ToDosRemaining = sequelize.define('toDosRemaining', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
    tableName: 'toDosRemaining'
  }
);

module.exports = ToDosRemaining;
