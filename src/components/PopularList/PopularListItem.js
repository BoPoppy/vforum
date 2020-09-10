import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({}));
function PopularListItem(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12}>
          <p style={{ marginBottom: '0' }}>Posts name</p>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>Comments:</p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>4565,</p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>Likes: </p>
            <p style={{ paddingRight: '4px', marginBottom: '0' }}>5465</p>
          </div>
          <p style={{ marginBottom: '0' }}>newest post: 2/9/2020</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default PopularListItem;
