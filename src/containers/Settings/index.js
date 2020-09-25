import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Divider,
  Chip,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { requestInfo, getUserListRequest } from '../../actions';
import ChangePassword from './ChangePassword';
import { NavLink } from 'react-router-dom';
import { getUserRole } from '../../common/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    backgroundColor: '#efefed',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#efefed',
  },
  fieldset: {
    border: ' 1px solid #d1d1e0',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '100px',
  },
  legend: {
    width: 'fit-content',
    paddingLeft: '2px',
    paddingRight: '2px',
    margin: 0,
  },
  userInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  info1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info2: { color: 'grey', fontSize: 15 },
  buttons: { paddingTop: theme.spacing(4) },
  displayName: {
    marginBottom: theme.spacing(1),
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: 16,
    fontStyle: 'italic',
  },
  gender: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: 16,
    fontStyle: 'italic',
  },
  role: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: 14,
  },
  submit: {
    marginLeft: '5px',
    marginRight: '5px',
  },
}));

function Settings(props) {
  const { requestInfo, userInfo } = props;

  const classes = useStyles();
  useEffect(() => {
    requestInfo();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.paper}>
            <fieldset className={classes.fieldset}>
              <legend className={classes.legend}>
                <Typography className={classes.userInfo}>User Info</Typography>
              </legend>
              <div className={classes.info}>
                <div className={classes.info1}>
                  <Typography className={classes.info2}>
                    Display Name
                  </Typography>
                  <Typography className={classes.displayName}>
                    {userInfo.display_name}
                  </Typography>
                </div>
                <Divider />
                <div className={classes.info1}>
                  <Typography className={classes.info2}>Email</Typography>
                  <Typography className={classes.email}>
                    {userInfo.email}
                  </Typography>
                </div>
                <Divider />
                <div className={classes.info1}>
                  <Typography className={classes.info2}>Gender</Typography>
                  <Typography className={classes.gender}>
                    {userInfo.gender}
                  </Typography>
                </div>
                <Divider />
                <div className={classes.info1}>
                  <Typography className={classes.info2}>Role</Typography>
                  <Chip
                    label={userInfo.role}
                    className={classes.role}
                    size='small'
                    color={
                      userInfo.role === 'admin'
                        ? 'secondary'
                        : userInfo.role === 'moderator'
                        ? 'primary'
                        : 'default'
                    }
                  />
                </div>
              </div>
            </fieldset>

            <ChangePassword />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.buttons}>
            {getUserRole() === 'admin' || getUserRole() === 'moderator' ? (
              <Button
                variant='contained'
                color='primary'
                className={classes.submit}
                component={NavLink}
                to={'/userlist'}
              >
                View user list
              </Button>
            ) : null}
            {getUserRole() === 'admin' ? (
              <Button
                variant='contained'
                color='primary'
                className={classes.submit}
                component={NavLink}
                to={'/grouplist'}
              >
                View grouplist
              </Button>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ userInfo, changePassword }) => ({
  userInfo,
  changePassword,
});

const mapDispatchToProps = (dispatch) => ({
  requestInfo: () => dispatch(requestInfo()),
  getUserListRequest: () => dispatch(getUserListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
