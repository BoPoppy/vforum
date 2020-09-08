import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop, Fade } from '@material-ui/core';

import { connect } from 'react-redux';
import Message from './Message';
import { hideMessage } from '../../actions';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    width: 100,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
}));

function PopoverMessage(props) {
  const { showMessage, hideMessage } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    hideMessage();
    setOpen(false);
  };

  let xhtml = null;
  if (showMessage.status) {
    xhtml = (
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Message
              type={showMessage.messageType}
              message={showMessage.message}
              onClosePanel={handleClose}
            />
          </Fade>
        </Modal>
      </div>
    );
  }
  return xhtml;
}
const mapStateToProps = ({ showMessage }) => ({
  showMessage,
});

const mapDispatchToProps = (dispatch) => ({
  hideMessage: () => dispatch(hideMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverMessage);
