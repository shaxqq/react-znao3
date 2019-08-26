const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstPassword: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastPassword: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
