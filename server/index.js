import LoginForm from "../src/components/PersonalArea/LoginForm";

const express = require("express");
const db = require("./database/db");

db.sequelize
  .sync()
  .then(() => {
    console.log("Nice! Database looks fine");
  })
  .catch(err => {
    console.log(err, "Something went wrong with the Database Update!");
  });

const app = express();
const port = 3001;
//
// app.set = ('PersonalArea', __dirname + '../src/components/PersonalArea');
//
//
// app.get = ('/registration', (req, res)=>{res.render('RegisterForm')});
const login = LoginForm;
app.get =
  ("/login",
  (req, res) => {
    res.send(login);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
