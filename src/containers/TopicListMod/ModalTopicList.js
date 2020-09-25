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
import {
  updateTopicRequest,
  deleteTopicRequest,
  updateTopicClear,
  deleteTopicClear,
  requestSingleTopicList,
} from '../../actions';
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
  textfield: {},
}));

function TopicModalList(props) {
  const {
    id,
    name,
    updateTopicRequest,
    deleteTopicRequest,
    updateTopicClear,
    deleteTopicClear,
    requestSingleTopicList,
    deleteTopic,
    updateTopic,
    description,
    groupId,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
    updateTopicClear();
    deleteTopicClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
    requestSingleTopicList(groupId);
  };

  const onSubmit = (data) => {
    console.log(data);
    updateTopicRequest(groupId, id, data);
  };
  return (
    <div>
      <Button type='button' onClick={handleOpen}>
        Edit / Delete
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
                name='name'
                label='Title'
                id='name'
                defaultValue={name}
              />
              {errors.name && <ErrorMessage text={errors.name.message} />}
              <br />
              <TextField
                inputRef={register({
                  required: 'Required',
                })}
                margin='normal'
                variant='outlined'
                className={classes.textfield}
                name='description'
                fullWidth
                id='description'
                label='Description'
                defaultValue={description}
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
                disabled={
                  deleteTopic.isLoading === true ||
                  updateTopic.isLoading === true
                }
              >
                Save change
              </Button>
            </form>
            {updateTopic.isLoading === 'false' ? null : (
              <div>
                {updateTopic.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {updateTopic.type === 1 ? (
                      <Alert severity='success'>{updateTopic.message}</Alert>
                    ) : (
                      <Alert severity='error'>{updateTopic.message}</Alert>
                    )}
                  </div>
                )}
              </div>
            )}
            <h2 id='transition-modal-title'>OR</h2>
            <Button
              variant='contained'
              color='secondary'
              disabled={
                deleteTopic.isLoading === true || updateTopic.isLoading === true
              }
              onClick={() => deleteTopicRequest(groupId, id)}
            >
              Delete
            </Button>
            {deleteTopic.isLoading === 'false' ? null : (
              <div>
                {deleteTopic.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {deleteTopic.type === 1 ? (
                      <Alert severity='success'>{deleteTopic.message}</Alert>
                    ) : (
                      <Alert severity='error'>{deleteTopic.message}</Alert>
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

const mapStateToProps = ({ updateTopic, deleteTopic }) => ({
  updateTopic,
  deleteTopic,
});

const mapDispatchToProps = (dispatch) => ({
  updateTopicRequest: (groupId, id, data) =>
    dispatch(updateTopicRequest(groupId, id, data)),
  deleteTopicRequest: (groupId, id) =>
    dispatch(deleteTopicRequest(groupId, id)),
  updateTopicClear: () => dispatch(updateTopicClear()),
  deleteTopicClear: () => dispatch(deleteTopicClear()),
  requestSingleTopicList: (id) => dispatch(requestSingleTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicModalList);
