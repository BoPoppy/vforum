import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { submitTopicRequest, submitTopicClear } from '../../actions';
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
  const { submitTopic, submitTopicRequest, submitTopicClear, id } = props;
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
    submitTopicRequest(id, data);
  };
  return (
    <div className={classes.modalPaper}>
      <h2 id='transition-modal-title'>Create New Topic</h2>
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
        <br />
        <textarea
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

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={submitTopic.isLoading === true}
        >
          Save change
        </Button>
      </form>
      {submitTopic.isLoading === null ? null : (
        <div>
          {submitTopic.isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              {submitTopic.type === 1 ? (
                <Alert severity='success' onClose={() => submitTopicClear()}>
                  {submitTopic.message}
                </Alert>
              ) : (
                <Alert severity='error' onClose={() => submitTopicClear()}>
                  {submitTopic.message}
                </Alert>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ submitTopic }) => ({
  submitTopic,
});

const mapDispatchToProps = (dispatch) => ({
  submitTopicRequest: (groupId, data) =>
    dispatch(submitTopicRequest(groupId, data)),
  submitTopicClear: () => dispatch(submitTopicClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
