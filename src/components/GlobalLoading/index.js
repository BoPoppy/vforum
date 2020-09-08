import React from 'react';
import { makeStyles } from '@material-ui/core';
import LoadingIcon from '../../assets/img/loading.gif';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  globalLoading: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99,
    background: 'rgba(0, 0, 0, 0.4)',
  },
  icon: {
    position: 'fixed',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '40%',
    width: 150,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
}));

function GlobalLoading(props) {
  const classes = useStyles();
  const { isLoading } = props;
  console.log(isLoading);
  let xhtml = null;
  if (isLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt='loading' className={classes.icon} />
      </div>
    );
  }
  return xhtml;
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps, null)(GlobalLoading);
