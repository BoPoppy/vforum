import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { requestLikeComment, requestUnlikeComment } from '../../actions';

const useStyles = makeStyles((theme) => ({
  likesCommBtn: {
    fontSize: 14,
    outline: 'none',
  },
}));

function Comment(props) {
  const {
    likes,
    likeComment,
    unlikeComment,
    requestLikeComment,
    requestUnlikeComment,
    postId,
    topicId,
    groupId,
    flags,
    userId,
    id,
  } = props;
  const classes = useStyles();

  const liked = flags && flags.find((item) => item === userId);

  console.log(liked);
  const handleClick = () => {
    if (likeComment.isLoading === true || unlikeComment.isLoading === true) {
      return null;
    } else {
      if (liked) {
        requestUnlikeComment(groupId, topicId, postId, id);
      } else {
        requestLikeComment(groupId, topicId, postId, id);
      }
    }
  };

  return (
    <div>
      <Button
        color={liked ? 'secondary' : 'default'}
        startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        onClick={handleClick}
        className={classes.likesCommBtn}
      >
        {likes}
      </Button>
    </div>
  );
}

const mapStateToProps = ({ likeComment, unlikeComment }) => ({
  likeComment,
  unlikeComment,
});

const mapDispatchToProps = (dispatch) => ({
  requestLikeComment: (groupId, topicId, postId, id) =>
    dispatch(requestLikeComment(groupId, topicId, postId, id)),
  requestUnlikeComment: (groupId, topicId, postId, id) =>
    dispatch(requestUnlikeComment(groupId, topicId, postId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
