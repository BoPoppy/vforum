import React from 'react';
import {
  Paper,
  Typography,
  Button,
  Modal,
  Backdrop,
  makeStyles,
  Fade,
  CircularProgress,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { deleteCommentRequest, deleteCommentClear } from '../../actions';
import { Alert } from '@material-ui/lab';
import UpdateComment from './UpdateComment';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    maxHeight: 70,
    minWidth: 120,
  },
}));

function Comment(props) {
  const {
    likes,
    createdAt,
    createdBy,
    updated,
    id,
    description,
    updatedAt,
    postId,
    topicId,
    groupId,
    deleteComment,
    deleteCommentRequest,
    deleteCommentClear,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    deleteCommentClear();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper>
        <Typography>{createdBy}</Typography>
        <Typography>{description}</Typography>
        <Typography>{createdAt}</Typography>
        <div>
          <Button type='button' onClick={handleOpen}>
            delete
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
                <h2 id='transition-modal-title'>DELETE COMMENT</h2>

                <Typography> Are you sure to delete this comment?</Typography>
                <Paper elevation={1}>
                  <Typography>{createdBy}</Typography>
                  <Typography>{description}</Typography>
                  <Typography>{createdAt}</Typography>
                </Paper>
                <Button variant='contained' onClick={handleCloseModal}>
                  Exit
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() =>
                    deleteCommentRequest(groupId, topicId, postId, id)
                  }
                >
                  delete
                </Button>

                {deleteComment.isLoading === 'false' ? null : (
                  <div>
                    {deleteComment.isLoading === true ? (
                      <CircularProgress />
                    ) : (
                      <div>
                        {deleteComment.type === 1 ? (
                          <Alert severity='success'>
                            {deleteComment.message}
                          </Alert>
                        ) : (
                          <Alert severity='error'>
                            {deleteComment.message}
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
        <UpdateComment
          description={description}
          groupId={groupId}
          topicId={topicId}
          postId={postId}
          id={id}
        />
      </Paper>
    </div>
  );
}

const mapStateToProps = ({ deleteComment }) => ({
  deleteComment,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCommentRequest: (groupId, topicId, postId, id) =>
    dispatch(deleteCommentRequest(groupId, topicId, postId, id)),
  deleteCommentClear: () => dispatch(deleteCommentClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
