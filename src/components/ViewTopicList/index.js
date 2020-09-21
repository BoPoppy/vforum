import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

function TopicList(props) {
  const { title, description, createdAt, createdBy, groupId, topicId } = props;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>
            <NavLink to={`/vforum/group/${groupId}/topic/${topicId}/post`}>
              {title}
            </NavLink>
          </Typography>
          <Typography>{description}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Created by: {createdBy}</Typography>
          <Typography>Created At: {createdAt}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

export default TopicList;
