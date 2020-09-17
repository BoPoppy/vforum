import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  Divider,
  Collapse,
} from '@material-ui/core';
import Comment from '../../components/Comment';
import { connect } from 'react-redux';
import { getPost } from '../../actions';
import { useForm } from 'react-hook-form';
import { commentRequest } from '../../actions';
import ErrorMessage from '../../components/errorMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  icon: {
    width: 100,
    backgroundColor: 'grey',
    marginRight: theme.spacing(2),
    borderRadius: 50,
    [theme.breakpoints.down('xs')]: {
      width: 50,
    },
  },
  userIcon: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  polygon: {},
  label: {
    margin: 0,
  },
  commentBtn: {},
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));

function Post(props) {
  const { match, post, getPost, commentRequest } = props;
  const [checked, setChecked] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { groupId, topicId, postId } = match.params;
  const {
    commentsPost,
    countLike,
    countCommentPost,
    createdBy,
    _id,
    title,
    description,
    createdAt,
    comment,
  } = post;

  useEffect(() => {
    getPost(groupId, topicId, postId);
  }, [comment]);

  const onSubmit = (data) => {
    const { description } = data;

    commentRequest(groupId, topicId, postId, description);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.userIcon}>
              <div>
                <Typography>{title}</Typography>
                <Typography> {createdBy}</Typography>
              </div>
              <div>
                <Typography>Likes: {countLike}</Typography>
                <Typography> Comments: {countCommentPost}</Typography>
              </div>
            </div>
            <Divider />
            <div>{description}</div>
            <div>{createdAt}</div>
            <div>
              <Button>Like</Button>

              <Button onClick={handleChange} className={classes.commentBtn}>
                Comment
              </Button>

              <div className={classes.container}>
                <Collapse in={checked}>
                  <div className={classes.svg}>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                      <textarea
                        ref={register({
                          required: 'Required',
                        })}
                        className={classes.textfield}
                        name='description'
                      />

                      <br />
                      {errors.description && (
                        <ErrorMessage text={errors.description.message} />
                      )}
                      <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </Collapse>
              </div>
            </div>
          </Paper>
          {commentsPost &&
            commentsPost.map((item, index) => {
              const {
                countLike,
                createdBy,
                updatedBy,
                _id,
                description,
                createdAt,
                updatedAt,
              } = item;
              return (
                <Comment
                  key={index}
                  likes={countLike}
                  createdAt={createdAt}
                  createdBy={createdBy}
                  updated={updatedBy}
                  id={_id}
                  description={description}
                  updatedAt={updatedAt}
                  postId={postId}
                />
              );
            })}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ post, comment }) => ({
  post,
  comment,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (groupId, topicId, postId) =>
    dispatch(getPost(groupId, topicId, postId)),
  commentRequest: (groupId, topicId, postId, description) =>
    dispatch(commentRequest(groupId, topicId, postId, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
