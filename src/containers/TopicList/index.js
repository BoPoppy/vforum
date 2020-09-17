import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import {
  requestSingleTopicList,
  submitTopicRequest,
  submitTopicClear,
} from '../../actions';
import ViewTopicList from '../../components/ViewTopicList';
import ErrorMessage from '../../components/errorMessage';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
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
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
}));
function PostsList(props) {
  const {
    singleTopicList,
    requestSingleTopicList,
    match,
    submitTopic,
    submitTopicRequest,
    submitTopicClear,
  } = props;
  const { id } = match.params;

  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    submitTopicClear();
    requestSingleTopicList(id);
    setOpen(false);
  };

  useEffect(() => {
    requestSingleTopicList(id);
  }, []);
  const onSubmit = (data) => {
    console.log(data);
    submitTopicRequest(id, data);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={0} className={classes.paper}>
            left
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Vforum
            </Typography>
            <div>
              <Button type='button' onClick={handleOpen}>
                Create Topic
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
                    <h2 id='transition-modal-title'>Create topic</h2>
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
                      {errors.name && (
                        <ErrorMessage text={errors.name.message} />
                      )}
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
                              <Alert severity='success'>
                                {submitTopic.message}
                              </Alert>
                            ) : (
                              <Alert severity='error'>
                                {submitTopic.message}
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
            {singleTopicList &&
              singleTopicList.map((item, key) => {
                const { name, createdBy, createdAt, _id, description } = item;

                return (
                  <ViewTopicList
                    key={key}
                    title={name}
                    createdAt={createdAt}
                    createdBy={createdBy}
                    description={description}
                    groupId={id}
                    topicId={_id}
                  />
                );
              })}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <PopularList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ submitTopic, singleTopicList }) => ({
  submitTopic,
  singleTopicList,
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleTopicList: (id) => dispatch(requestSingleTopicList(id)),
  submitTopicRequest: (id, data) => dispatch(submitTopicRequest(id, data)),
  submitTopicClear: () => dispatch(submitTopicClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
