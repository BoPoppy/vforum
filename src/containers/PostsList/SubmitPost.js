import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { submitPostRequest, clearSubmitPost } from '../../actions';
import ErrorMessage from '../../components/errorMessage';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
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
  openButton: {},
  textfield: {
    width: '100%',
    height: '200px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
  button: {
    display: 'flex',
  },
}));
function SubmitPost(props) {
  const {
    groupId,
    topicId,
    submitPost,
    submitPostRequest,
    clearSubmitPost,
  } = props;

  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    clearSubmitPost();
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    submitPostRequest(groupId, topicId, data);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={8} md={6}>
        <Button
          onClick={handleOpen}
          variant='contained'
          color='default'
          className={classes.openButton}
          className={classes.button}
          startIcon={<AddIcon />}
        >
          create post
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
                {errors.title && <ErrorMessage text={errors.title.message} />}
                <br />
                <textarea
                  placeholder='Type in the description...'
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
                <div className={classes.button}>
                  <Button variant='contained' color='primary' fullWidth>
                    Exit
                  </Button>
                  <Button variant='contained' color='primary' fullWidth>
                    Clear
                  </Button>

                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                  >
                    Save change
                  </Button>
                </div>
              </form>
              {submitPost.isLoading === null ? null : (
                <div>
                  {submitPost.isLoading ? (
                    <CircularProgress />
                  ) : (
                    <div>
                      {submitPost.type === 1 ? (
                        <Alert severity='success'>{submitPost.message}</Alert>
                      ) : (
                        <Alert severity='error'>{submitPost.message}</Alert>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </Modal>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ submitPost }) => ({
  submitPost,
});

const mapDispatchToProps = (dispatch) => ({
  submitPostRequest: (groupId, topicId, data) =>
    dispatch(submitPostRequest(groupId, topicId, data)),
  clearSubmitPost: () => dispatch(clearSubmitPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPost);
