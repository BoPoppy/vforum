import React from 'react';
import {
  makeStyles,
  Button,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
} from '@material-ui/core';
import ErrorMessage from '../errorMessage';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateCommentRequest, updateCommentClear } from '../../actions';
import { Alert } from '@material-ui/lab';

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
  formControl: {
    maxHeight: 70,
    minWidth: 120,
  },
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));

function UpdateComment(props) {
  const {
    description,
    groupId,
    topicId,
    postId,
    id,
    updateCommentRequest,
    updateComment,
    updateCommentClear,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
    updateCommentClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    updateCommentRequest(groupId, topicId, postId, id, data);
  };
  return (
    <div>
      <Button type='button' onClick={handleOpen}>
        EDIT
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

            <div>
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  ref={register({
                    required: 'Required',
                  })}
                  defaultValue={description}
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

            {updateComment.isLoading === 'false' ? null : (
              <div>
                {updateComment.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {updateComment.type === 1 ? (
                      <Alert severity='success'>{updateComment.message}</Alert>
                    ) : (
                      <Alert severity='error'>{updateComment.message}</Alert>
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

const mapStateToProps = ({ updateComment }) => ({ updateComment });

const mapDispatchToProps = (dispatch) => ({
  updateCommentRequest: (groupId, topicId, postId, id, data) =>
    dispatch(updateCommentRequest(groupId, topicId, postId, id, data)),

  updateCommentClear: () => dispatch(updateCommentClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateComment);
