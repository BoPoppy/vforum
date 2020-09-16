import { Paper, Typography } from '@material-ui/core';
import React from 'react';

function Comment(props) {
  const {
    likes,
    createdAt,
    createdBy,
    updated,
    id,
    description,
    updatedAt,
    postId,
  } = props;
  return (
    <div>
      <Paper>
        <Typography>{createdBy}</Typography>
        <Typography>{description}</Typography>
        <Typography>{createdAt}</Typography>
      </Paper>
    </div>
  );
}

export default Comment;
