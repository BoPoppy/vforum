import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 40,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
  },
}));

function GroupList(props) {
  const classes = useStyles();
  const { discription, posts, comments, newest } = props;

  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={1}>
          <ForumIcon className={classes.icon} />
        </Grid>
        <Grid item xs={7}>
          <p style={{ marginBottom: '0' }}>{discription}</p>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>Posts: </p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>{posts},</p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>Comments: </p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>{comments}</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Alert icon={false} severity='warning'>
            newest post: {newest}
          </Alert>
        </Grid>
      </Grid>
      <Divider variant='middle' />
    </div>
  );
}

export default GroupList;
