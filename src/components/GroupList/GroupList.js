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
  const { description, createdBy, createdAt, name, id } = props;

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
          <p style={{ marginBottom: '0' }}>{name}</p>
          <p style={{ marginBottom: '0' }}>{description}</p>
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
