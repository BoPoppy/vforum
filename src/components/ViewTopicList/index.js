import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ToysIcon from '@material-ui/icons/Toys';
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
  topic: {},
  title: {
    display: 'flex',
    padding: 0,
  },
  icon: {
    color: '#005673',
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },
    paddingLeft: theme.spacing(1),
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
  },
  createdBy: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 13,
    marginRight: theme.spacing(1),
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
    marginRight: theme.spacing(1),
  },
  createdAt1: {
    fontSize: 13,
    fontWeight: 550,
    fontStyle: 'italic',
  },
}));

function TopicList(props) {
  const { title, description, createdAt, createdBy, groupId, topicId } = props;
  const classes = useStyles();
  return (
    <div className={classes.topic}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={8} className={classes.title}>
          <ToysIcon className={classes.icon} />
          <div>
            <NavLink
              to={`/vforum/group/${groupId}/topic/${topicId}/post`}
              className={classes.topicTitle}
            >
              {title}
            </NavLink>

            <Typography className={classes.topicDes}>{description}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.alert}>
          <Typography className={classes.createdBy}>
            Created By:&nbsp;
            <Typography className={classes.createdBy1}>{createdBy}</Typography>
          </Typography>
          <Typography className={classes.createdAt}>
            Created At:&nbsp;
            <Typography className={classes.createdAt1}>
              {moment(createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                .toDate()
                .toString()
                .split(' ')
                .slice(0, 5)
                .join(' ')}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Divider variant='middle' />
    </div>
  );
}

export default TopicList;
