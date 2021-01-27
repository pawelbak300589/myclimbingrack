import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// import CustomNavbar from "../navbar/custom-navbar";
import LeftDrawer from "./left-drawer.component";
import ProfileDrawer from "./profile-drawer.component";

import { selectCurrentUser } from "../../redux/auth/authSelectors";

import './header.styles.css';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = ({ currentUser }) => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawers, setDrawers] = React.useState({
    left: false,
    profile: false,
  });

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawers({ ...drawers, [anchor]: open });
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {
        currentUser ?
          <MenuList>
            <MenuItem>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <p>Messages</p>
            </MenuItem>
            <MenuItem>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={toggleDrawer('profile', true)}>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            </MenuItem>
          </MenuList>
          :
          <MenuList>
            <MenuItem aria-label="login" component={Link} to='/login'>
              <p>Login</p>
            </MenuItem>
            <MenuItem aria-label="register" component={Link} to='/register'>
              <p>Register</p>
            </MenuItem>
          </MenuList>
      }
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer" component={Link} to='/'
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            RackMyGear
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {
              currentUser ?
                <React.Fragment>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="profile-drawer"
                    aria-haspopup="true"
                    onClick={toggleDrawer('profile', true)}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </React.Fragment>
                :
                <React.Fragment>
                  <Button aria-label="login" color="inherit" component={Link} to='/login'>Login</Button>
                  <Button aria-label="register" color="inherit" component={Link} to='/register'>Register</Button>
                </React.Fragment>
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="profile-drawer"
              aria-haspopup="true"
              onClick={toggleDrawer('profile', true)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <LeftDrawer open={drawers['left']} toggleDrawer={toggleDrawer} />
      <ProfileDrawer open={drawers['profile']} toggleDrawer={toggleDrawer} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
