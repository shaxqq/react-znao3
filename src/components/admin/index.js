import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

const Admin = () => {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "All mail",
          "Trash",
          "Spam"
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer variant="temporary">{drawer}</Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default Admin;
