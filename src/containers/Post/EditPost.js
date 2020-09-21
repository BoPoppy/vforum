import React from 'react';

import {
  makeStyles,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CircularProgress,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updatePostRequest, updatePostClear, getPost } from '../../actions';
import { Alert } from '@material-ui/lab';
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
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));

function PostModalList(props) {
  const {
    id,
    title,
    description,
    updatePostRequest,
    updatePostClear,
    getPost,
    updatePost,
    groupId,
    topicId,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
    updatePostClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
    getPost(groupId, topicId, id);
  };

  const onSubmit = (data) => {
    console.log(data);
    updatePostRequest(groupId, topicId, id, data);
  };
  return (
    <div>
      <Button type='button' onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2 id='transition-modal-title'>EDIT</h2>
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
                id='name'
                defaultValue={title}
              />
              {errors.title && <ErrorMessage text={errors.title.message} />}
              <br />
              <textarea
                ref={register({
                  required: 'Required',
                })}
                className={classes.textfield}
                name='description'
                defaultValue={description}
              />

              <br />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={updatePost.isLoading === true}
              >
                Save change
              </Button>
            </form>
            {updatePost.isLoading === 'false' ? null : (
              <div>
                {updatePost.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {updatePost.type === 1 ? (
                      <Alert severity='success'>{updatePost.message}</Alert>
                    ) : (
                      <Alert severity='error'>{updatePost.message}</Alert>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ updatePost }) => ({
  updatePost,
});

const mapDispatchToProps = (dispatch) => ({
  updatePostRequest: (groupId, topicId, id, data) =>
    dispatch(updatePostRequest(groupId, topicId, id, data)),

  updatePostClear: () => dispatch(updatePostClear()),

  getPost: (groupId, topicId, postId) =>
    dispatch(getPost(groupId, topicId, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModalList);
