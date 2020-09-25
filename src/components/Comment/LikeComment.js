import React from 'react';
import { Paper, Typography, makeStyles, Chip, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import UpdateComment from './UpdateComment';
import DeleteComment from './DeleteComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getUserRole } from '../../common/auth';

const useStyles = makeStyles((theme) => ({
  likesCommBtn: {
    fontSize: 14,
  },
}));

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
    topicId,
    groupId,
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Button
        aria-label='like'
        className={classes.likesCommBtn}
        startIcon={<FavoriteBorderIcon />}
      >
        {likes}
      </Button>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
