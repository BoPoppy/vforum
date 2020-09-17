import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import GroupList from '../../components/GroupList';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import {
  requestGroupList,
  submitGroupRequest,
  submitGroupClear,
} from '../../actions';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import ErrorMessage from '../../components/errorMessage';

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
function Vforum(props) {
  const {
    requestGroupList,
    groupList,
    submitGroup,
    submitGroupClear,
    submitGroupRequest,
  } = props;
  useEffect(() => {
    requestGroupList();
  }, []);

  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    submitGroupClear();
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    submitGroupRequest(data);
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
                    {submitGroup.isLoading === null ? null : (
                      <div>
                        {submitGroup.isLoading ? (
                          <CircularProgress />
                        ) : (
                          <div>
                            {submitGroup.type === 1 ? (
                              <Alert severity='success'>
                                {submitGroup.message}
                              </Alert>
                            ) : (
                              <Alert severity='error'>
                                {submitGroup.message}
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
            {groupList.map((item, key) => {
              const { name, createdBy, createdAt, _id } = item;
              return (
                <GroupList
                  key={key}
                  name={name}
                  createdAt={createdAt}
                  createdBy={createdBy}
                  id={_id}
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

const mapStateToProps = ({ groupList, submitGroup }) => ({
  groupList,
  submitGroup,
});

const mapDispatchToProps = (dispatch) => ({
  requestGroupList: () => dispatch(requestGroupList()),
  submitGroupRequest: (data) => dispatch(submitGroupRequest(data)),
  submitGroupClear: () => dispatch(submitGroupClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vforum);
