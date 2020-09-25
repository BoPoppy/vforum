import React, { useRef } from 'react';
import { makeStyles, Button, TextareaAutosize, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { commentRequest } from '../../actions';
import ErrorMessage from '../../components/errorMessage';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#e3e3e3',
    borderRadius: '15px',
    padding: theme.spacing(2),
    marginBottom: '90px',
  },
  textfield: {
    width: '100%',
    height: '100px',

    backgroundColor: '#e3e3e3',
    border: 'none',
    resize: 'none',
    outline: 'none',
  },
  submit: {
    justifyContent: 'flex-end',
  },
}));

function Post(props) {
  const { commentRequest, groupId, topicId, postId } = props;
  const [checked, setChecked] = React.useState(false);
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('description', '');

  const onSubmit = (data) => {
    const { description } = data;
    commentRequest(groupId, topicId, postId, description);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
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
              required: 'Required',
            })}
            name='description'
            placeholder='Enter your comment here...'
          />
          <br />
          {errors.description && (
            <ErrorMessage text={errors.description.message} />
          )}
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
