const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("tasks", {

  description: { // Description of task
    type: Sequelize.STRING,
    allowNull: false
  },

  priorityLevel: { // Task priority
    type: Sequelize.INTEGER,
    allowNull: false
  },

  employeeId: { // Used to link id of employee
    type: Sequelize.INTEGER
  },

  status: { // Completion status
    type: Sequelize.BOOLEAN,
  },
  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;
