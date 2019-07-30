import React, { useState, forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";
import LoginForm from "../PersonalArea/LoginForm";
import RegisterForm from "../PersonalArea/RegisterForm";

const useStyles = makeStyles(theme => ({
  icon__button: {
    marginLeft: theme.spacing(2)
  },
  user__button_active: {
    background: "#33b5e5!important",
    color: "white",
    width: 182,
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },
  user__button: {
    width: 182,
    marginLeft: 40,
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },

  dialog: {
    justifyContent: "space-around",
    padding: "25px 40px 12px"
  },
  dialog__end: {
    justifyContent: "flex-end",
    padding: "45px 40px 35px"
  },
  login__button: {
    color: "white",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },
  forgot__button: {
    color: "#33b5e5!important",
    border: "2px solid #33b5e5!important",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NavButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState({ login: true, register: false });
  // const [active, setActive] = useState(false);

  const changeLoginForm = () => {
    setChange({ login: true, register: false });
    if ({ login: true }) {
      // return(
      // {style={{background: "#33b5e5!important"}}};
      // {classes.button}
      // )
      // style:{{background: "#33b5e5!important"}}
    }
  };
  const changeRegisterForm = () => {
    setChange({ login: false, register: true });
  };

  // const activeButton= () => {
  //   setActive(!active);
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton
        className={classes.icon__button}
        color="inherit"
        edge="end"
        onClick={handleClickOpen}
      >
        <AccountCircle />
      </IconButton>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions className={classes.dialog}>
          <Button
            variant="contained"
            className={classes.user__button}
            onClick={changeLoginForm}
          >
            Войти
          </Button>
          <Button
            variant="contained"
            className={classes.user__button}
            onClick={changeRegisterForm}
          >
            Регистрация
          </Button>
        </DialogActions>

        {change.login && <LoginForm />}
        {change.register && <RegisterForm />}

        <DialogActions className={classes.dialog__end}>
          <Button variant="outlined" className={classes.forgot__button}>
            Забыли пароль ?
          </Button>
          <Button variant="contained" className={classes.login__button}>
            Войти
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default NavButton;
