import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { getPostList, submitPostRequest, clearSubmitPost } from '../../actions';
import ViewPostList from '../../components/ViewPostList';
import ErrorMessage from '../../components/errorMessage';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
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
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));
function PostsList(props) {
  const {
    postList,
    getPostList,
    match,
    submitPost,
    submitPostRequest,
    clearSubmitPost,
  } = props;
  const { groupId, topicId } = match.params;

  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    clearSubmitPost();
    getPostList(groupId, topicId);
    setOpen(false);
  };

  useEffect(() => {
    getPostList(groupId, topicId);
  }, []);
  const onSubmit = (data) => {
    console.log(data);
    submitPostRequest(groupId, topicId, data);
  };

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
            <div>
              <Button type='button' onClick={handleOpen}>
                Create Post
              </Button>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.modalPaper}>
                    <h2 id='transition-modal-title'>Create post</h2>
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <TextField
                        variant='outlined'
                        margin='normal'
                        inputRef={register({
                          required: 'Required',
                        })}
                        fullWidth
                        name='title'
                        label='Title'
                        id='title'
                      />
                      {errors.title && (
                        <ErrorMessage text={errors.title.message} />
                      )}
                      <br />
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
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                      >
                        Save change
                      </Button>
                    </form>
                    {submitPost.isLoading === null ? null : (
                      <div>
                        {submitPost.isLoading ? (
                          <CircularProgress />
                        ) : (
                          <div>
                            {submitPost.type === 1 ? (
                              <Alert severity='success'>
                                {submitPost.message}
                              </Alert>
                            ) : (
                              <Alert severity='error'>
                                {submitPost.message}
                              </Alert>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Fade>
              </Modal>
            </div>
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

const mapStateToProps = ({ postList, submitPost }) => ({
  postList,
  submitPost,
});

const mapDispatchToProps = (dispatch) => ({
  getPostList: (groupId, topicId) => dispatch(getPostList(groupId, topicId)),
  submitPostRequest: (groupId, topicId, data) =>
    dispatch(submitPostRequest(groupId, topicId, data)),
  clearSubmitPost: () => dispatch(clearSubmitPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
