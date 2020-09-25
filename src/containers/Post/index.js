import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Divider,
  Breadcrumbs,
} from '@material-ui/core';
import Comment from '../../components/Comment';
import { connect } from 'react-redux';
import {
  getAllCommentRequest,
  getPost,
  getGroupRequest,
  requestTopic,
} from '../../actions';
import CommentSubmit from './CommentSubmit';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import * as moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ToysIcon from '@material-ui/icons/Toys';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink } from 'react-router-dom';
import LikePost from './LikePost';
import { getUserId, getUserRole } from '../../common/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  postTitle: {
    fontSize: '34px',
    letterSpacing: '1px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  navLink: {
    display: 'flex',
    fontSize: 14,
    color: '#005673',
    textTransform: 'capitalize',
    '&:hover, &:focus': {
      color: '#005673',
    },
  },
  info: { paddingBottom: theme.spacing(3) },
  info1: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  postBy: {
    fontSize: 14,
    color: 'grey',
  },
  postBy1: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  atComm: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  Comm: {
    fontSize: 14,
  },
  desp: {
    fontSize: 20,
    paddingBottom: theme.spacing(3),
  },
  infoButton: {
    display: 'flex',
    paddingTop: theme.spacing(3),
  },
}));

function Post(props) {
  const {
    match,
    post,
    getPost,
    getAllCommentRequest,
    allComment,
    getGroupRequest,
    requestTopic,
    getGroup,
    getTopic,
  } = props;
  const { groupId, topicId, postId } = match.params;
  const {
    countLike,
    countCommentPost,
    createdBy,
    _id,
    title,
    description,
    createdAt,
    userId,
    flags,
  } = post;

  useEffect(() => {
    getPost(groupId, topicId, postId);
    getAllCommentRequest(groupId, topicId, postId);
    getGroupRequest(groupId);
    requestTopic(groupId, topicId);
  }, []);

  function handleClick(event) {
    event.preventDefault();
  }

  const classes = useStyles();
  return (
    <div>
      <Grid container style={{ paddingTop: '80px' }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper elevation={1} className={classes.paper}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Typography
                component={NavLink}
                className={classes.navLink}
                to={`/vforum`}
                onClick={handleClick}
              >
                <HomeIcon className={classes.icon} />
                Vforum
              </Typography>
              <Typography
                component={NavLink}
                className={classes.navLink}
                to={`/vforum/group/${groupId}/topic`}
                onClick={handleClick}
              >
                <WhatshotIcon className={classes.icon} />
                {getGroup.name}
              </Typography>
              <Typography
                component={NavLink}
                className={classes.navLink}
                to={`/vforum/group/${groupId}/topic/${topicId}/post`}
                onClick={handleClick}
              >
                <ToysIcon className={classes.icon} />
                {getTopic.name}
              </Typography>
            </Breadcrumbs>

            <Typography className={classes.postTitle}>{title}</Typography>
            <div className={classes.info}>
              <div className={classes.info1}>
                <Typography className={classes.postBy}>By:&nbsp;</Typography>
                <Typography className={classes.postBy1}>{createdBy}</Typography>
              </div>
              <div className={classes.info1}>
                <Typography className={classes.atComm}>
                  {moment(createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                    .toDate()
                    .toString()
                    .split(' ')
                    .slice(0, 5)
                    .join(' ')}
                  ,&nbsp;
                </Typography>
                <Typography className={classes.Comm}>
                  Comments:&nbsp;
                </Typography>
                <Typography className={classes.atComm}>
                  {countCommentPost}
                </Typography>
              </div>
            </div>
            <Typography className={classes.desp}>{description}</Typography>
            <Divider variant='middle' />
            <div className={classes.infoButton}>
              <LikePost
                groupId={groupId}
                topicId={topicId}
                postId={postId}
                countLike={countLike}
                userId={getUserId()}
                flags={flags}
              />
              {getUserId() === userId ? (
                <div>
                  <EditPost
                    title={title}
                    groupId={groupId}
                    topicId={topicId}
                    id={_id}
                    description={description}
                  />
                </div>
              ) : null}
              {getUserRole() === 'admin' ||
              getUserRole() === 'moderator' ||
              getUserId() === userId ? (
                <div>
                  <DeletePost
                    title={title}
                    createdBy={createdBy}
                    createdAt={createdAt}
                    groupId={groupId}
                    topicId={topicId}
                    id={_id}
                  />
                </div>
              ) : null}
            </div>
          </Paper>
          {allComment.length === 0 ? null : <Divider />}
          {allComment &&
            allComment.map((item, index) => {
              const {
                countLike,
                createdBy,
                isUpdated,
                _id,
                description,
                createdAt,
                updatedAt,
                flags,
              } = item;
              return (
                <Comment
                  key={index}
                  likes={countLike}
                  createdAt={moment(createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                    .toDate()
                    .toString()
                    .split(' ')
                    .slice(0, 5)
                    .join(' ')}
                  createdBy={createdBy}
                  updated={isUpdated}
                  groupId={groupId}
                  topicId={topicId}
                  id={_id}
                  description={description}
                  updatedAt={updatedAt}
                  postId={postId}
                  flags={flags}
                  userId={userId}
                />
              );
            })}
          <CommentSubmit groupId={groupId} topicId={topicId} postId={postId} />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ post, allComment, getGroup, getTopic }) => ({
  post,
  allComment,
  getGroup,
  getTopic,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (groupId, topicId, postId) =>
    dispatch(getPost(groupId, topicId, postId)),
  getAllCommentRequest: (groupId, topicId, postId) =>
    dispatch(getAllCommentRequest(groupId, topicId, postId)),
  getGroupRequest: (id) => dispatch(getGroupRequest(id)),
  requestTopic: (groupId, id) => dispatch(requestTopic(groupId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
