import React, { useState, forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  userButton: {
    color: "#2196f3"
  },
  icon__button: {
    marginLeft: theme.spacing(2)
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NavButton = () => {
  const classes = useStyle;
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <IconButton
        className={classes.icon__button}
        style={{ marginLeft: "18px" }}
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
        <DialogActions style={{ justifyContent: "space-around" }}>
          <Button variant="contained" className={classes.userButton}>
            Войти
          </Button>
          <Button color="primary">Регистрация</Button>
        </DialogActions>

        <DialogTitle>dfsg</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default NavButton;
