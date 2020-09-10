import React, { useEffect } from 'react';
import defaultUser from '../../assets/img/defaultUser.png';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import ErrorMessage from '../../components/errorMessage';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  requestInfo,
  requestChangePassword,
  refreshChangePassword,
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
}));

function Settings(props) {
  const {
    requestInfo,
    userInfo,
    requestChangePassword,
    changePassword,
    refreshChangePassword,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    refreshChangePassword();
    setOpen(false);
  };

  useEffect(() => {
    requestInfo();
  }, []);

  const onSubmit = (data) => {
    const { oldpassword, newpassword, renewpassword } = data;
    console.log('change password', oldpassword, newpassword, renewpassword);
    requestChangePassword(oldpassword, newpassword, renewpassword);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.userIcon}>
              <img
                src={defaultUser}
                alt='defaultUser'
                className={classes.icon}
              />
              <div>
                <Typography>{userInfo.display_name}</Typography>
                <Typography>id: {userInfo.id}</Typography>
              </div>
            </div>
            <div>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Display Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{userInfo.display_name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Email</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{userInfo.email}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Gender</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{userInfo.gender}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Role</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{userInfo.role}</Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Button type='button' onClick={handleOpen}>
                change password
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
                    <h2 id='transition-modal-title'>Change password</h2>
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
                        name='oldpassword'
                        label='Old Password'
                        type='password'
                        id='oldpassword'
                        error={errors.oldpassword ? true : false}
                      />
                      {errors.oldpassword && (
                        <ErrorMessage text={errors.oldpassword.message} />
                      )}

                      <TextField
                        variant='outlined'
                        margin='normal'
                        inputRef={register({
                          required: 'Required',
                        })}
                        fullWidth
                        name='newpassword'
                        label='New Password'
                        type='password'
                        id='newpassword'
                        error={errors.newpassword ? true : false}
                      />
                      {errors.newpassword && (
                        <ErrorMessage text={errors.newpassword.message} />
                      )}

                      <TextField
                        variant='outlined'
                        margin='normal'
                        inputRef={register({
                          required: 'Required',
                        })}
                        fullWidth
                        name='renewpassword'
                        label='Retype New Password'
                        type='password'
                        id='renewpassword'
                        error={errors.renewpassword ? true : false}
                      />
                      {errors.renewpassword && (
                        <ErrorMessage text={errors.renewpassword.message} />
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
                    {changePassword.isLoading === 'false' ? null : (
                      <div>
                        {changePassword.isLoading === true ? (
                          <CircularProgress />
                        ) : (
                          <div>
                            {changePassword.type === 1 ? (
                              <Alert severity='success'>
                                {changePassword.message}
                              </Alert>
                            ) : (
                              <Alert severity='error'>
                                {changePassword.message}
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
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ userInfo, changePassword }) => ({
  userInfo,
  changePassword,
});

const mapDispatchToProps = (dispatch) => ({
  requestInfo: () => dispatch(requestInfo()),
  requestChangePassword: (oldpassword, newpassword, renewpassword) =>
    dispatch(requestChangePassword(oldpassword, newpassword, renewpassword)),
  refreshChangePassword: () => dispatch(refreshChangePassword()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
