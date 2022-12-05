const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("tasks", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priorityLevel: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  employeeId: {
    type: Sequelize.INTEGER
  },

  status: {
    type: Sequelize.BOOLEAN,
  },
  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;
