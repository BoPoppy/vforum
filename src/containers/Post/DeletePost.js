import React, { useEffect } from 'react';
import {
  makeStyles,
  Button,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
  Typography,
  Paper,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePostRequest, deletePostClear } from '../../actions';
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

function DeletePost(props) {
  const {
    id,
    topicId,
    deletePostRequest,
    deletePostClear,
    deletePost,
    groupId,
    createdBy,
    title,
    createdAt,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
    deletePostClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    pushBack();
  }, [deletePost]);

  const pushBack = () => {
    if (deletePost.type === 1) {
      deletePostClear();
      history.goBack();
    }
  };

  return (
    <div>
      <Button type='button' onClick={handleOpen}>
        Delete
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2 id='transition-modal-title'> DELETE</h2>
            <Typography>Are you sure you want to delete this post?</Typography>
            <Paper>
              <Typography>{title}</Typography>
              <Typography>{createdAt}</Typography>
              <Typography>{createdBy}</Typography>
            </Paper>
            <Button
              variant='contained'
              color='secondary'
              disabled={deletePost.isLoading === true}
              onClick={() => deletePostRequest(groupId, topicId, id)}
            >
              Delete
            </Button>
            {deletePost.isLoading === 'false' ? null : (
              <div>
                {deletePost.isLoading === true ? (
                  <CircularProgress />
                ) : (
                  <div>
                    {deletePost.type === 1 ? (
                      <Alert severity='success'>{deletePost.message}</Alert>
                    ) : (
                      <Alert severity='error'>{deletePost.message}</Alert>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ deletePost }) => ({
  deletePost,
});

const mapDispatchToProps = (dispatch) => ({
  deletePostRequest: (groupId, topicId, id) =>
    dispatch(deletePostRequest(groupId, topicId, id)),
  deletePostClear: () => dispatch(deletePostClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
