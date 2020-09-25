import React from 'react';
import { Grid, Divider, makeStyles, Typography } from '@material-ui/core';
import ToysIcon from '@material-ui/icons/Toys';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    padding: 0,
  },
  icon: {
    color: '#005673',
    fontSize: 45,
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },

    paddingRight: theme.spacing(1),
  },
  topicTitle: {
    color: '#005673',
    fontSize: 14,
    fontWeight: 700,
    '&:hover, &:focus': {
      color: '#005673',
    },
    textTransform: 'capitalize',
  },
  topicDes: {
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: 520,
  },
  alert: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
  },
  createdBy: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 13,
  },
  createdBy1: {
    fontSize: 13,
    fontWeight: 550,
    fontStyle: 'italic',
  },
  createdAt: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 13,
  },
  createdAt1: {
    fontSize: 13,
    fontWeight: 550,
    fontStyle: 'italic',
  },
}));

function GroupList(props) {
  const classes = useStyles();
  const { description, createdBy, createdAt, name, topicId, groupId } = props;

  return (
    <div>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={8} className={classes.title}>
          <ToysIcon className={classes.icon} />
          <div>
            <NavLink
              to={`/vforum/group/${groupId}/topic/${topicId}/post`}
              className={classes.topicTitle}
            >
              {name}
            </NavLink>

            <Typography className={classes.topicDes}>{description}</Typography>
          </div>
        </Grid>
        <Grid className={classes.alert}>
          <div
            style={{
              display: 'flex',
              paddingTop: '1px',
              justifyContent: 'space-between',
            }}
          >
            <Typography className={classes.createdBy}>
              Created By:&nbsp;
            </Typography>
            <Typography className={classes.createdBy1}>{createdBy}</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              paddingTop: '2px',
              justifyContent: 'space-between',
            }}
          >
            <Typography className={classes.createdAt}>
              Created At:&nbsp;
            </Typography>
            <Typography className={classes.createdAt1}>{createdAt}</Typography>
          </div>
        </Grid>
      </Grid>
      <Divider variant='middle' />
    </div>
  );
}

export default GroupList;
