const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");
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
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(
  session({
    secret: "o3s",
    store: new FileStore(),
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  })
);

app.get("/", (req, res) => {
  res.send("login");
});

app.get("/admin", (req, res) => {
  res.send("http://localhost:3000/admin");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
