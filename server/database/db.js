const Sequelize = require("sequelize");
const user = require("../tables/User");
const db = {};
const sequelize = new Sequelize("o3", "sazeke", "aq1sw2de3", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

user.sequelize.sync();
