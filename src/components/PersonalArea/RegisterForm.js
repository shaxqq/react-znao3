import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dialog__content: {
    display: "flex",
    flexDirection: "column"
  },
  dialog__text: {
    margin: "16px 0 0"
  },
  text__field: {
    "& label.Mui-focused": {
      color: "#33b5e5"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#33b5e5"
      }
    }
  }
}));
const RegisterForm = () => {
  const classes = useStyles();
  return (
    <DialogContent className={classes.dialog__content}>
      <DialogContentText className={classes.dialog__text}>
        Ваш e-mail
      </DialogContentText>
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.text__field}
        type="email"
        name="email"
        autoComplete="email"
        margin="dense"
        variant="outlined"
      />
      <DialogContentText className={classes.dialog__text}>
        Ваш пароль
      </DialogContentText>
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.text__field}
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
      />
      <DialogContentText className={classes.dialog__text}>
        Ваш пароль
      </DialogContentText>
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.text__field}
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
      />
      <DialogContentText className={classes.dialog__text}>
        Ваш пароль
      </DialogContentText>
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.text__field}
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
      />
    </DialogContent>
  );
};
export default RegisterForm;
