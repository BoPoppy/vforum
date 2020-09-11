import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import GroupList from '../../components/GroupList';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { requestGroupList } from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));
function Vforum(props) {
  const { requestGroupList, groupList } = props;
  useEffect(() => {
    requestGroupList();
  }, []);
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

const mapStateToProps = ({ groupList }) => ({
  groupList,
});

const mapDispatchToProps = (dispatch) => ({
  requestGroupList: () => dispatch(requestGroupList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vforum);
