import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { submitGroupRequest, submitGroupClear } from '../../actions';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import ErrorMessage from '../../components/errorMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));

function AddGroup(props) {
  const { submitGroup, submitGroupRequest, submitGroupClear } = props;
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
    submitGroupRequest(data);
  };
  return (
    <div className={classes.modalPaper}>
      <h2 id='transition-modal-title'>Create New Group</h2>
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
        />
        {errors.name && <ErrorMessage text={errors.name.message} />}

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={submitGroup.isLoading === true}
        >
          Save change
        </Button>
      </form>
      {submitGroup.isLoading === null ? null : (
        <div>
          {submitGroup.isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              {submitGroup.type === 1 ? (
                <Alert severity='success' onClose={() => submitGroupClear()}>
                  {submitGroup.message}
                </Alert>
              ) : (
                <Alert severity='error' onClose={() => submitGroupClear()}>
                  {submitGroup.message}
                </Alert>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ submitGroup }) => ({
  submitGroup,
});

const mapDispatchToProps = (dispatch) => ({
  submitGroupRequest: (data) => dispatch(submitGroupRequest(data)),
  submitGroupClear: () => dispatch(submitGroupClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
