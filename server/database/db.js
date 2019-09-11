const Sequelize = require("sequelize");
const passport = require("passport");
const LocalStrategy = require("passport-local");
// const login = require('../../src/components/PersonalArea/LoginForm');
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

passport.serializeUser(function(user, done) {
  console.log("сериализация", user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("десериализация", id);
  User.findById(id, function(err, users) {
    // const user = (users.id === id) ? users : false;
    done(err, users);
  });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

module.exports = db;
user.sequelize.sync();
