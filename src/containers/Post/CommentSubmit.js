import React, { useRef } from 'react';
import { makeStyles, Button, TextareaAutosize, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { commentRequest } from '../../actions';
import ErrorMessage from '../../components/errorMessage';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#f0f0f5',
    borderRadius: '15px',
    padding: theme.spacing(2),
    marginBottom: '90px',
  },
  textfield: {
    width: '100%',
    height: '100px',

    backgroundColor: '#f0f0f5',
    border: 'none',
    resize: 'none',
    outline: 'none',
  },
  submit: {
    paddingTop: theme.spacing(1),
  },
}));

function Post(props) {
  const { commentRequest, groupId, topicId, postId } = props;
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('description', '');

  const onSubmit = (data) => {
    const { description } = data;
    commentRequest(groupId, topicId, postId, description);
  };

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextareaAutosize
            rowsMin={3}
            rowsMax={4}
            className={classes.textfield}
            ref={register({
              minLength: {
                value: 3,
                message: 'The comment must be longer than 3 characters',
              },
            })}
            name='description'
            placeholder='Enter your comment here...'
          />
          <br />
          {errors.description && (
            <ErrorMessage text={errors.description.message} />
          )}
          <br />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={password.current === ''}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

const mapStateToProps = ({ comment }) => ({
  comment,
});

const mapDispatchToProps = (dispatch) => ({
  commentRequest: (groupId, topicId, postId, description) =>
    dispatch(commentRequest(groupId, topicId, postId, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
