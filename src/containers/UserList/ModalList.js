import React, { useRef } from 'react';

import {
  makeStyles,
  Button,
  Modal,
  Backdrop,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Fade,
  CircularProgress,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  updateRoleRequest,
  getUserListRequest,
  updateRoleClear,
  deleteUserRequest,
  deleteUserClear,
} from '../../actions';
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
}));

function Settings(props) {
  const {
    changeRole,
    updateRoleClear,
    role,
    id,
    updateRoleRequest,
    getUserListRequest,
    deleteUserRequest,
    deleteUserClear,
    deleteUser,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { handleSubmit, errors, control, watch } = useForm();
  const newRole = useRef({});
  newRole.current = watch('newRole', role);

  const handleOpen = () => {
    setOpen(true);
    updateRoleClear();
    deleteUserClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
    getUserListRequest();
  };

  const onSubmit = (data) => {
    console.log(data);
    updateRoleRequest(id, data);
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
              <FormControl
                className={classes.formControl}
                error={errors.gender ? true : false}
              >
                <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
                <Controller
                  as={
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                    >
                      <MenuItem value='admin'>admin</MenuItem>
                      <MenuItem value='moderator'>moderator</MenuItem>
                      <MenuItem value='member'>member</MenuItem>
                    </Select>
                  }
                  name='newRole'
                  control={control}
                  defaultValue={role}
                />
              </FormControl>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={
                  deleteUser.isLoading === true ||
                  changeRole.isLoading === true ||
                  newRole.current === role
                }
              >
                Save change
              </Button>
            </form>
            {changeRole.isLoading === 'false' ? null : (
              <div>
                {changeRole.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {changeRole.type === 1 ? (
                      <Alert severity='success'>{changeRole.message}</Alert>
                    ) : (
                      <Alert severity='error'>{changeRole.message}</Alert>
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
                deleteUser.isLoading === true || changeRole.isLoading === true
              }
              onClick={() => deleteUserRequest(id)}
            >
              Delete
            </Button>
            {deleteUser.isLoading === 'false' ? null : (
              <div>
                {deleteUser.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {deleteUser.type === 1 ? (
                      <Alert severity='success'>{deleteUser.message}</Alert>
                    ) : (
                      <Alert severity='error'>{deleteUser.message}</Alert>
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

const mapStateToProps = ({ changeRole, deleteUser }) => ({
  changeRole,
  deleteUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateRoleRequest: (id, data) => dispatch(updateRoleRequest(id, data)),
  getUserListRequest: () => dispatch(getUserListRequest()),
  updateRoleClear: () => dispatch(updateRoleClear()),
  deleteUserRequest: (id) => dispatch(deleteUserRequest(id)),
  deleteUserClear: () => dispatch(deleteUserClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
