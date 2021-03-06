import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/errorMessage';
import { connect } from 'react-redux';
import { loadId } from '../../actions';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const { loadId } = props;
  const { register, handleSubmit, errors } = useForm();
  const data = localStorage.getItem('userId');

  const SubmitData = (data) => {
    const { email, password } = data;
    loadId(email, password);
    console.log('login', email, password);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(SubmitData)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            inputRef={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            fullWidth
            disabled={data ? true : false}
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            error={errors.email ? true : false}
          />
          {errors.email && <ErrorMessage text={errors.email.message} />}
          <TextField
            variant='outlined'
            margin='normal'
            inputRef={register({
              required: 'Required',
              minLength: {
                value: 8,
                message: 'The password must be longer than 8 characters',
              },
            })}
            fullWidth
            disabled={data ? true : false}
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            error={errors.password ? true : false}
          />
          {errors.password && <ErrorMessage text={errors.password.message} />}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={data ? true : false}
            className={classes.submit}
          >
            Sign In
          </Button>
          {data ? (
            <Alert severity='warning'>you're already login!!</Alert>
          ) : (
            <Grid container>
              <Grid item>
                <Link to='/register'> {"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ logOut }) => ({ logOut });

const mapDispatchToProps = (dispatch) => ({
  loadId: (email, password) => dispatch(loadId(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
