import React, { useRef } from 'react';
import {
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  makeStyles,
  Popover,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm, Controller } from 'react-hook-form';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import { registerRequest } from '../../actions';
import ErrorMessage from '../../components/errorMessage';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    padding: theme.spacing(2),
  },
  errorUsername: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formControl: {
    maxHeight: 70,
    minWidth: 120,
  },
  link: {
    paddingBottom: theme.spacing(4),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SubmitData = (data) => {
    const { email, display_name, password, gender } = data;
    registerRequest({ email, display_name, password, gender });
    console.log(email, display_name, password, gender);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(SubmitData)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                inputRef={register({
                  required: 'Required',
                  pattern: {
                    value: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i,
                    message: `Invalid username`,
                  },
                })}
                fullWidth
                id='username'
                label='Username'
                name='display_name'
                autoComplete='username'
                autoFocus
                error={errors.display_name}
              />
              {errors.display_name && (
                <div className={classes.errorUsername}>
                  <ErrorMessage text={errors.display_name.message} />

                  <IconButton
                    aria-describedby={id}
                    onClick={handleClick}
                    style={{ padding: 0 }}
                  >
                    <InfoIcon />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'left',
                    }}
                  >
                    <Typography className={classes.typography}>
                      - Only contains alphanumeric characters, underscore and
                      dot.
                      <br />
                      - Underscore and dot can't be at the end or start of a
                      username (e.g _username / username_ / .username /
                      username.).
                      <br />
                      - Underscore and dot can't be next to each other (e.g
                      user_.name).
                      <br />
                      - Underscore or dot can't be used multiple times in a row
                      (e.g user__name / user..name).
                      <br />- Number of characters must be between 8 to 20.
                    </Typography>
                  </Popover>
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                inputRef={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                error={errors.email ? true : false}
              />

              {errors.email && <ErrorMessage text={errors.email.message} />}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                inputRef={register({
                  required: 'Required',
                  minLength: {
                    value: 6,
                    message: 'The password must be longer than 6 characters',
                  },
                })}
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                error={errors.password ? true : false}
              />
              {errors.password && (
                <ErrorMessage text={errors.password.message} />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                inputRef={register({
                  required: 'Required',
                  validate: (value) =>
                    value === password.current || 'The passwords do not match',
                })}
                fullWidth
                name='repassword'
                label='Repeat password'
                type='password'
                id='repassword'
                autoComplete='current-password'
                error={errors.repassword ? true : false}
              />
              {errors.repassword && (
                <ErrorMessage text={errors.repassword.message} />
              )}
            </Grid>
            <Grid item xs={12}>
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
                      <MenuItem value='male'>Male</MenuItem>
                      <MenuItem value='female'>Female</MenuItem>
                      <MenuItem value='lgbtq'>LGBTQ+</MenuItem>
                    </Select>
                  }
                  name='gender'
                  rules={{ required: 'Required' }}
                  control={control}
                  defaultValue=''
                />
                {errors.gender && <ErrorMessage text={errors.gender.message} />}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={errors.checkbox ? true : false}>
                <FormControlLabel
                  control={
                    <Checkbox
                      inputRef={register({ required: 'Required' })}
                      name='checkbox'
                      color='primary'
                      defaultValue={false}
                    />
                  }
                  label='I agree to the terms of service, privacy policy and cookie policy.'
                />
                {errors.checkbox && (
                  <ErrorMessage text={errors.checkbox.message} />
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/login' className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  registerRequest: () => dispatch(registerRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
