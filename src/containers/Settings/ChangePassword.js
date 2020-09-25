import React from 'react';
import {
  makeStyles,
  Button,
  TextField,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import ErrorMessage from '../../components/errorMessage';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { requestChangePassword } from '../../actions';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  changePass: { fontSize: 20, fontWeight: 'bold' },
  fieldset: {
    padding: '1rem',
    borderRadius: '10px',
    width: '50%',
    margin: 'auto',
    border: ' 1px solid #d1d1e0',
  },
  legend: {
    width: 'fit-content',
    paddingLeft: '2px',
    paddingRight: '2px',
    margin: 0,
  },
  form: {
    width: '100%',
    height: '100%',
  },
  oldpass: {
    paddingBottom: theme.spacing(2),
  },
  newpass: {
    paddingBottom: theme.spacing(2),
  },
  renewpass: {
    paddingBottom: theme.spacing(2),
  },
}));

function Settings(props) {
  const { requestChangePassword, changePassword } = props;

  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { oldpassword, newpassword, renewpassword } = data;
    console.log('change password', oldpassword, newpassword, renewpassword);
    requestChangePassword(oldpassword, newpassword, renewpassword);
  };
  return (
    <div>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>
          <Typography className={classes.changePass}>
            Change Password
          </Typography>
        </legend>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant='outlined'
            inputRef={register({
              required: 'Required',
            })}
            fullWidth
            name='oldpassword'
            label='Old Password'
            type='password'
            id='oldpassword'
            error={errors.oldpassword ? true : false}
            className={classes.oldpass}
          />
          {errors.oldpassword && (
            <ErrorMessage text={errors.oldpassword.message} />
          )}

          <TextField
            variant='outlined'
            inputRef={register({
              required: 'Required',
            })}
            fullWidth
            name='newpassword'
            label='New Password'
            type='password'
            id='newpassword'
            className={classes.newpass}
            error={errors.newpassword ? true : false}
          />
          {errors.newpassword && (
            <ErrorMessage text={errors.newpassword.message} />
          )}

          <TextField
            variant='outlined'
            inputRef={register({
              required: 'Required',
            })}
            fullWidth
            name='renewpassword'
            label='Retype New Password'
            type='password'
            id='renewpassword'
            className={classes.renewpass}
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
                  <Alert severity='success'>{changePassword.message}</Alert>
                ) : (
                  <Alert severity='error'>{changePassword.message}</Alert>
                )}
              </div>
            )}
          </div>
        )}
      </fieldset>
    </div>
  );
}

const mapStateToProps = ({ changePassword }) => ({
  changePassword,
});

const mapDispatchToProps = (dispatch) => ({
  requestChangePassword: (oldpassword, newpassword, renewpassword) =>
    dispatch(requestChangePassword(oldpassword, newpassword, renewpassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
