const Sequelize = require('sequelize');
const db = require('../db');

const Employee = db.define("employees", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  department: {
    type: Sequelize.STRING,
    allowNull: false
  },

});

module.exports = Employee;
