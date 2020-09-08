import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ReplayIcon from '@material-ui/icons/Replay';
import SuccessfulIcon from '../../assets/img/successful.png';
import FailedIcon from '../../assets/img/failed.png';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    width: 100,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
  button: {
    textAlign: 'right',
  },
}));

function Message(props) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <h2 id='transition-modal-title'>Message</h2>

      <div>
        {props.type === 1 || props.type === 2 ? (
          <img src={SuccessfulIcon} alt='successful' className={classes.icon} />
        ) : (
          <img src={FailedIcon} alt='failed' className={classes.icon} />
        )}

        <p id='transition-modal-description'>{props.message}</p>
        {props.type === 1 || props.type === 2 ? (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            component={NavLink}
            onClick={props.onClosePanel}
            to={props.type === 1 ? '/login' : '/vforum'}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'right',
            }}
            className={classes.button}
            startIcon={props.type === 1 ? <AccountBoxIcon /> : <ForumIcon />}
          >
            {props.type === 1 ? 'go to login' : 'go to vforum'}
          </Button>
        ) : (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={props.onClosePanel}
            className={classes.button}
            startIcon={<ReplayIcon />}
          >
            try again
          </Button>
        )}
      </div>
    </div>
  );
}

export default Message;
