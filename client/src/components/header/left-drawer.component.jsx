import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Eco from '@material-ui/icons/Eco';
import DragIndicator from '@material-ui/icons/DragIndicator';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
  list: {
    width: 250,
    width: 'auto',
  },
});

const LeftDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer anchor='left' open={open} onClose={toggleDrawer('left', false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
      >
        <List>
          <ListItem button component={Link} to='/gears'>
            <ListItemIcon><Eco /></ListItemIcon>
            <ListItemText primary='Gears' />
          </ListItem>
        <Divider />
          <ListItem button component={Link} to='/sets'>
            <ListItemIcon><DragIndicator /></ListItemIcon>
            <ListItemText primary='Sets' />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to='/lists'>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary='Lists' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default LeftDrawer;