import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestSubmitLike, requestUnlikePost } from '../../actions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Post(props) {
  const {
    groupId,
    topicId,
    postId,
    countLike,
    requestSubmitLike,
    flags,
    userId,
    requestUnlikePost,
    submitLikePost,
    submitUnlikePost,
  } = props;

  const liked = flags && flags.find((item) => item === userId);
  const [state, setstate] = useState(false);

  useEffect(() => {
    if (liked) {
      setstate(true);
    } else {
      setstate(false);
    }
  }, [liked]);
  const handleClick = () => {
    if (
      submitLikePost.isLoading === true ||
      submitUnlikePost.isLoading === true
    ) {
      return null;
    } else {
      if (liked) {
        requestUnlikePost(groupId, topicId, postId);
        setstate(false);
      } else {
        requestSubmitLike(groupId, topicId, postId);
        setstate(true);
      }
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant={state ? 'contained' : 'outlined'}
        color='secondary'
        startIcon={state ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        onClick={handleClick}
      >
        {countLike} likes
      </Button>
    </div>
  );
}

const mapStateToProps = ({ submitLikePost, submitUnlikePost }) => ({
  submitLikePost,
  submitUnlikePost,
});

const mapDispatchToProps = (dispatch) => ({
  requestSubmitLike: (groupId, topicId, postId) =>
    dispatch(requestSubmitLike(groupId, topicId, postId)),
  requestUnlikePost: (groupId, topicId, postId) =>
    dispatch(requestUnlikePost(groupId, topicId, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
