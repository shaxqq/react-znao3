const Sequelize = require("sequelize");
const user = {};
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
user.sequelize = sequelize;
user.Sequelize = Sequelize;
module.exports = user;

const User = user.sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.findAll({ raw: true })
  .then(users => {
    console.log(users);
  })
  .catch(err => console.log(err));

// User.create({
//   username: "Tom",
//   password: 'add',
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));
// User.create({
//   username: "Ben",
//   password: 'daa',
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));
