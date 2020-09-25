import React from 'react';
import { Paper, Typography, makeStyles, Chip, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import UpdateComment from './UpdateComment';
import DeleteComment from './DeleteComment';
import { getUserRole, getUserId } from '../../common/auth';
import LikeComment from './LikeComment';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#e3e3e3',
    borderRadius: '15px',
  },
  info: {
    display: 'flex',
  },
  info1: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  info2: {
    fontSize: 13,
    color: 'grey',
    fontStyle: 'italic',
  },
  userRole: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: 12,
    fontStyle: 'italic',
  },
  edited: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'grey',
  },
  desc: {
    fontSize: 15,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
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
    userId,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.info}>
          <div className={classes.info1}>
            <Typography className={classes.username}>{createdBy}</Typography>
            <Chip
              color={
                getUserRole() === 'admin'
                  ? 'secondary'
                  : getUserRole() === 'moderator'
                  ? 'primary'
                  : 'default'
              }
              size='small'
              label={getUserRole()}
              className={classes.userRole}
            />
            {updated === true ? (
              <div>
                <Typography className={classes.edited}>(edited)</Typography>
              </div>
            ) : null}
          </div>

          <Typography className={classes.info2}>{createdAt}</Typography>
        </div>
        <Typography className={classes.desc}>{description}</Typography>
      </Paper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LikeComment
          groupId={groupId}
          topicId={topicId}
          postId={postId}
          id={id}
          likes={likes}
        />
        {getUserId() === userId ? (
          <UpdateComment
            description={description}
            groupId={groupId}
            topicId={topicId}
            postId={postId}
            id={id}
          />
        ) : null}

        {getUserRole() === 'admin' ||
        getUserRole() === 'moderator' ||
        getUserId() === userId ? (
          <div>
            <DeleteComment
              groupId={groupId}
              postId={postId}
              topicId={topicId}
              id={id}
              createdAt={createdAt}
              createdBy={createdBy}
              description={description}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
