import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { logout } from "../../redux/auth/authActions";

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    width: 'auto',
  },
  hideMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  hideDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const ProfileDrawer = ({ open, toggleDrawer, logout }) => {
  const classes = useStyles();

  return (
    <Drawer anchor='right' open={open} onClose={toggleDrawer('profile', false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer('profile', false)}
        onKeyDown={toggleDrawer('profile', false)}
      >
        <List>
          <ListItem button component={Link} to='/profile'>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
          <Divider />
          <ListItem className={classes.hideDesktop} button component={Link} to='/profile/messages'>
            <ListItemIcon aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary='Messages' />
          </ListItem>
          <Divider className={classes.hideDesktop} />
          <ListItem className={classes.hideDesktop} button component={Link} to='/profile/notifications'>
            <ListItemIcon aria-label="show 11 new notifications">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary='Notifications' />
          </ListItem>
          <Divider className={classes.hideDesktop} />
          <ListItem button component={Link} to='/profile/settings'>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          <Divider />
          <ListItem button onClick={logout}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect('', mapDispatchToProps)(ProfileDrawer);