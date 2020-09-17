import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { NavLink } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
  },
  icon: {
    fontSize: 40,

    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
  },
}));

function GroupList(props) {
  const classes = useStyles();
  const { description, createdBy, createdAt, name, topicId, groupId } = props;

  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={8} className={classes.title}>
          <ForumIcon className={classes.icon} />
          <div>
            <NavLink
              to={`/vforum/group/${groupId}/topic/${topicId}/post`}
              style={{ marginBottom: '0' }}
            >
              {name}
            </NavLink>

            <p style={{ marginBottom: '0' }}>{description}</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Alert icon={false} severity='warning'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ paddingRight: '4px', marginBottom: '0' }}>
                Created By: {createdBy}
              </p>
              <p style={{ paddingRight: '4px', marginBottom: '0' }}>
                Created At: {createdAt}
              </p>
            </div>
          </Alert>
        </Grid>
      </Grid>
      <Divider variant='middle' />
    </div>
  );
}

export default GroupList;
