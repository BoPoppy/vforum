import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import PopularListItem from './PopularListItem';

function index() {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        popular in the week
      </Typography>
      <Divider />
      <PopularListItem />
    </div>
  );
}

export default index;
