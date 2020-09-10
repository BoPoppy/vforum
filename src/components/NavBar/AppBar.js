import React from 'react';
import './Appbar.css';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  Divider,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu';
import ForumIcon from '@material-ui/icons/Forum';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
import { getAuthToken } from '../../common/auth';
import { logOut, requestInfo } from '../../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: 'white',
    backgroundColor: '#2E3B55',
    boxShadow: '0px 0px 0px 0px',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 200,
      paddingRight: 200,
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
    color: 'inherit',
    fontSize: 35,
    letterSpacing: '4px',
    fontStyle: 'italic',
    fontFamily: 'Lobster',
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 11,
  },

  list: {
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
    [[theme.breakpoints.up('md')]]: {
      display: 'flex',
    },
  },
  headerButtons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tablet: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  activelink: {
    fontweight: 'bold',
    color: 'red',
  },
}));

const Appbar = (props) => {
  const { logOut } = props;
  const data = getAuthToken('storage');
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (open = Boolean) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMobileOpen(open);
  };

  const ItemList = [
    {
      text: 'Vforum',
      url: 'vforum',
      icon: <ForumIcon />,
    },
    {
      text: 'Vmemory',
      url: 'vmemory',
      icon: <TimelineIcon />,
    },
    {
      text: 'Event',
      url: 'event',
      icon: <EventIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h1' className={classes.title}>
            VRoom
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge='start'
                className={classes.MenuButton}
                aria-label='menu'
                onClick={handleDrawerToggle(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='left'
                open={mobileOpen}
                onClose={handleDrawerToggle(false)}
                ModalProps={{
                  keepMounted: true,
                }}
                className={classes.drawer}
              >
                <div className={classes.toolbar} />
                <Divider />
                <List className={classes.list}>
                  {ItemList.map((item, index) => {
                    const { text, icon, url } = item;

                    return (
                      <ListItem
                        key={index}
                        button
                        component={NavLink}
                        to={url}
                        className={classes.link}
                        activeClassName={classes.activeLink}
                      >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText>{text}</ListItemText>
                      </ListItem>
                    );
                  })}
                  <Divider />

                  <ListItem
                    button
                    component={NavLink}
                    to={data ? '/settings' : '/login'}
                    className={classes.link}
                    activeClassName={classes.activeLink}
                  >
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={data ? 'settings' : 'Login'}
                    ></ListItemText>
                  </ListItem>

                  <ListItem
                    button
                    component={NavLink}
                    to={data ? '/login' : '/register'}
                    className={classes.link}
                    onClick={data ? logOut : null}
                    activeClassName={classes.activeLink}
                  >
                    <ListItemIcon>
                      <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={data ? 'logout' : 'Register'}
                    ></ListItemText>
                  </ListItem>
                </List>
              </Drawer>
            </div>
          ) : isTablet ? (
            <div className={classes.tablet}>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                component={NavLink}
                to={data ? '/settings' : '/login'}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                className={classes.button}
                startIcon={data ? <SettingsIcon /> : <AccountBoxIcon />}
              >
                {data ? 'Setting' : 'login'}
              </Button>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                component={NavLink}
                to={data ? '/login' : '/register'}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                onClick={data ? logOut : null}
                className={classes.button}
                startIcon={data ? <ExitToAppIcon /> : <PersonAddIcon />}
              >
                {data ? 'Logout' : 'register'}
              </Button>
              <Divider
                orientation='vertical'
                variant='fullWidth'
                flexItem
                classes={{ root: classes.divider }}
              />
              <IconButton
                edge='end'
                className={classes.MenuButton}
                aria-label='menu'
                onClick={handleDrawerToggle(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='left'
                open={mobileOpen}
                onClose={handleDrawerToggle(false)}
                ModalProps={{
                  keepMounted: true,
                }}
                className={classes.drawer}
              >
                <div className={classes.toolbar} />
                <Divider />
                <List className={classes.list}>
                  {ItemList.map((item, index) => {
                    const { text, icon, url } = item;

                    return (
                      <ListItem
                        key={text}
                        button
                        component={NavLink}
                        to={url}
                        className={classes.link}
                        activeClassName={classes.activeLink}
                      >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText>{text}</ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Drawer>
            </div>
          ) : (
            <div className={classes.headerButtons}>
              {ItemList.map((item) => {
                const { text, url } = item;

                return (
                  <NavLink key={text} to={`/${url}`} className='headerButton'>
                    {text}
                  </NavLink>
                );
              })}
              <Divider
                orientation='vertical'
                variant='fullWidth'
                flexItem
                classes={{ root: classes.divider }}
              />
              <Button
                variant='contained'
                color='secondary'
                size='small'
                component={NavLink}
                to={data ? '/settings' : '/login'}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                className={classes.button}
                startIcon={data ? <SettingsIcon /> : <AccountBoxIcon />}
              >
                {data ? 'Setting' : 'login'}
              </Button>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                component={NavLink}
                to={data ? '/login' : '/register'}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                onClick={data ? logOut : null}
                className={classes.button}
                startIcon={data ? <ExitToAppIcon /> : <PersonAddIcon />}
              >
                {data ? 'Logout' : 'register'}
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ loginReducer, logOut }) => ({
  loginReducer,
  logOut,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
