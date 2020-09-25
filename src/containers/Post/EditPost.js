import React, { useRef } from 'react';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    width: '50%',
    height: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: { display: 'flex', justifyContent: 'space-around' },
  textfield: {
    width: '100%',
    height: '200px',
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
  const { register, handleSubmit, errors, watch } = useForm();
  const newName = useRef({});
  newName.current = watch('title', title);

  const newDes = useRef({});
  newDes.current = watch('description', description);

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
                  minLength: {
                    value: 3,
                    message: 'The title must be longer than 3 characters',
                  },
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
                  minLength: {
                    value: 3,
                    message: 'The title must be longer than 3 characters',
                  },
                })}
                className={classes.textfield}
                name='description'
                defaultValue={description}
              />

              <br />
              <div className={classes.button}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleCloseModal()}
                  style={{ width: 100 }}
                >
                  Exit
                </Button>

                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  style={{ width: 200 }}
                >
                  Save change
                </Button>
              </div>
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
