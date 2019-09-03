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

User.findAll({ raw: true })
  .then(users => {
    console.log(users);
  })
  .catch(err => console.log(err));

// User.create({
//   name: "Tom",
//   firstPassword: 'add',
//   lastPassword: 'add',
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));
// User.create({
//   name: "Ben",
//   firstPassword: 'daa',
//   lastPassword: 'daa',
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));
