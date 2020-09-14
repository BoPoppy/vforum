import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { getPostList } from '../../actions';
import ViewPostList from '../../components/ViewPostList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));
function PostsList(props) {
  const { postList, getPostList, match } = props;
  const { groupId, topicId } = match.params;
  useEffect(() => {
    getPostList(groupId, topicId);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={0} className={classes.paper}>
            left
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Vforum
            </Typography>
            {postList.map((item, key) => {
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
                  createdAt={createdAt}
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

const mapStateToProps = ({ postList }) => ({
  postList,
});

const mapDispatchToProps = (dispatch) => ({
  getPostList: (groupId, topicId) => dispatch(getPostList(groupId, topicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
