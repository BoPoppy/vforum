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
  updateGroupRequest,
  deleteGroupRequest,
  updateGroupClear,
  deleteGroupClear,
  requestGroupList,
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
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));

function GroupModalList(props) {
  const {
    id,
    name,
    updateGroupRequest,
    deleteGroupRequest,
    updateGroupClear,
    deleteGroupClear,
    requestGroupList,
    deleteGroup,
    updateGroup,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
    updateGroupClear();
    deleteGroupClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
    requestGroupList();
  };

  const onSubmit = (data) => {
    console.log(data);
    updateGroupRequest(id, data);
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
            <h2 id='transition-modal-title'>EDIT / DELETE</h2>
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
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={
                  deleteGroup.isLoading === true ||
                  updateGroup.isLoading === true
                }
              >
                Save change
              </Button>
            </form>
            {updateGroup.isLoading === 'false' ? null : (
              <div>
                {updateGroup.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {updateGroup.type === 1 ? (
                      <Alert severity='success'>{updateGroup.message}</Alert>
                    ) : (
                      <Alert severity='error'>{updateGroup.message}</Alert>
                    )}
                  </div>
                )}
              </div>
            )}
            <Button
              variant='contained'
              color='secondary'
              disabled={
                deleteGroup.isLoading === true || updateGroup.isLoading === true
              }
              onClick={() => deleteGroupRequest(id)}
            >
              Delete
            </Button>
            {deleteGroup.isLoading === 'false' ? null : (
              <div>
                {deleteGroup.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {deleteGroup.type === 1 ? (
                      <Alert severity='success'>{deleteGroup.message}</Alert>
                    ) : (
                      <Alert severity='error'>{deleteGroup.message}</Alert>
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

const mapStateToProps = ({ updateGroup, deleteGroup }) => ({
  updateGroup,
  deleteGroup,
});

const mapDispatchToProps = (dispatch) => ({
  updateGroupRequest: (id, data) => dispatch(updateGroupRequest(id, data)),
  deleteGroupRequest: (id) => dispatch(deleteGroupRequest(id)),
  updateGroupClear: () => dispatch(updateGroupClear()),
  deleteGroupClear: () => dispatch(deleteGroupClear()),
  requestGroupList: () => dispatch(requestGroupList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupModalList);
