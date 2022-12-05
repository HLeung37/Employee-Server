const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priorityLevel: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  assignedTo: {
    type: Sequelize.INTEGER
  },

  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;
