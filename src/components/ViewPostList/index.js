import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  navlink: {
    color: '#005673',
    fontSize: 15,
    fontWeight: 700,
    '&:hover, &:focus': {
      color: '#005673',
    },
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: theme.spacing(1),
  },
  descrip: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 520,
    color: 'grey',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    marginLeft: theme.spacing(1),
    textOverflow: 'ellipsis',
  },
  likeComm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLike: { fontSize: 17, color: '#b30000' },
  iconComm: { fontSize: 17, color: '#2E3B55' },
  counts: {
    fontSize: 14,
    color: 'grey',
  },
  alert: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
  },
  createdBy: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 13,
    marginRight: theme.spacing(1),
  },
  createdBy1: {
    fontSize: 13,
    fontWeight: 550,
    fontStyle: 'italic',
    marginRight: theme.spacing(1),
  },
  createdAt: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 13,
    marginRight: theme.spacing(1),
  },
  createdAt1: {
    fontSize: 13,
    fontWeight: 550,
    fontStyle: 'italic',
    marginRight: theme.spacing(1),
  },
}));

function PostList(props) {
  const {
    title,
    description,
    createdAt,
    createdBy,
    groupId,
    topicId,
    postId,
    likes,
    comments,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <div style={{ flexGrow: 1 }}>
          <Typography
            component={NavLink}
            to={`/vforum/group/${groupId}/topic/${topicId}/post/${postId}`}
            className={classes.navlink}
          >
            {title}
          </Typography>
          <Typography className={classes.descrip}>{description}</Typography>
        </div>
        <Divider orientation='vertical' variant='middle' flexItem />
        <div style={{ width: '90px' }}>
          <div className={classes.likeComm}>
            <FavoriteIcon className={classes.iconLike} />
            <Typography className={classes.counts}>{likes}</Typography>
          </div>
          <div className={classes.likeComm}>
            <CommentIcon className={classes.iconComm} />
            <Typography className={classes.counts}>{comments}</Typography>
          </div>
        </div>
        <Divider orientation='vertical' variant='middle' flexItem />
        <div className={classes.alert}>
          <div
            style={{
              display: 'flex',
              paddingTop: '1px',
              justifyContent: 'space-between',
            }}
          >
            <Typography className={classes.createdBy}>
              Created By:&nbsp;
            </Typography>
            <Typography className={classes.createdBy1}>{createdBy}</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              paddingTop: '2px',
              justifyContent: 'space-between',
            }}
          >
            <Typography className={classes.createdAt}>
              Created At:&nbsp;
            </Typography>
            <Typography className={classes.createdAt1}>{createdAt}</Typography>
          </div>
        </div>
      </Grid>
      <Divider variant='middle' />
    </div>
  );
}

export default PostList;
