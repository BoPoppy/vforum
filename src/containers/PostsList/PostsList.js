import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { getPostList, requestTopic, getGroupRequest } from '../../actions';
import ViewPostList from '../../components/ViewPostList';
import SubmitPost from './SubmitPost';
import * as moment from 'moment';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  postlist: {
    paddingTop: theme.spacing(2),
    backgroundColor: '#efefed',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
  },
  topicTitle: {},
  topicDes: {
    fontSize: 13,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontStyle: 'italic',
    color: 'grey',
  },
  topicTitleChild: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: theme.spacing(1),
  },
  group: {
    display: 'flex',
    marginLeft: theme.spacing(3),
  },
  groupName: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    '&:hover, &:focus': {
      color: 'black',
    },
  },
  smallTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  createdByAt: {
    display: 'flex',
    paddingBottom: '12px',
  },
  topicByAtChild: {
    fontSize: 14,
    lineHeight: 1.25,
    marginBottom: '5px',
  },
  topicByAtChild1: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'italic',
    lineHeight: 1.25,
  },
  topicByAtChild2: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: theme.spacing(3),
    fontStyle: 'italic',
    lineHeight: 1.25,
  },
  postPaper: {
    backgroundColor: 'rgba(234, 242, 251, 0.3)',
  },
}));
function PostsList(props) {
  const {
    postList,
    getPostList,
    match,
    requestTopic,
    getTopic,
    getGroupRequest,
    getGroup,
  } = props;
  const { groupId, topicId } = match.params;

  useEffect(() => {
    getPostList(groupId, topicId);
    requestTopic(groupId, topicId);
    getGroupRequest(groupId);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.postlist}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.groupTitle}>
              <Typography className={classes.topicTitleChild}>
                {getTopic.name}
              </Typography>
              <Typography className={classes.topicDes}>
                {getTopic.description}
              </Typography>
              <Divider variant='middle' />
              <div className={classes.smallTitle}>
                <div className={classes.group}>
                  <Typography style={{ fontSize: 14, fontWeight: 'bold' }}>
                    Group:&nbsp;
                  </Typography>
                  <Typography
                    component={NavLink}
                    to={`/vforum/group/${groupId}/topic`}
                    className={classes.groupName}
                  >
                    {getGroup.name}
                  </Typography>
                </div>
                <div className={classes.createdByAt}>
                  <Typography className={classes.topicByAtChild}>
                    By:&nbsp;
                  </Typography>
                  <Typography className={classes.topicByAtChild1}>
                    {getTopic.createdBy},&nbsp;
                  </Typography>
                  <Typography className={classes.topicByAtChild}>
                    Date:&nbsp;
                  </Typography>
                  <Typography className={classes.topicByAtChild2}>
                    {moment(getTopic.createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                      .toDate()
                      .toString()
                      .split(' ')
                      .slice(0, 5)
                      .join(' ')}
                  </Typography>
                </div>
              </div>
            </div>
            <Paper className={classes.postPaper} elevation={1}>
              {postList &&
                postList.map((item, key) => {
                  const {
                    title,
                    createdBy,
                    createdAt,
                    _id,
                    countLike,
                    countCommentPost,
                    description,
                  } = item;
                  return (
                    <ViewPostList
                      key={key}
                      title={title}
                      createdAt={moment(createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                        .toDate()
                        .toString()
                        .split(' ')
                        .slice(0, 5)
                        .join(' ')}
                      createdBy={createdBy}
                      postId={_id}
                      likes={countLike}
                      comments={countCommentPost}
                      description={description}
                      groupId={groupId}
                      topicId={topicId}
                    />
                  );
                })}
            </Paper>
            <div>
              <SubmitPost groupId={groupId} topicId={topicId} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <PopularList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ postList, getTopic, getGroup }) => ({
  postList,
  getTopic,
  getGroup,
});

const mapDispatchToProps = (dispatch) => ({
  getPostList: (groupId, topicId) => dispatch(getPostList(groupId, topicId)),
  requestTopic: (groupId, id) => dispatch(requestTopic(groupId, id)),
  getGroupRequest: (id) => dispatch(getGroupRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
