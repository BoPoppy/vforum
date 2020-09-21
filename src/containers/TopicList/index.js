import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { requestSingleTopicList } from '../../actions';
import ViewTopicList from '../../components/ViewTopicList';

import { NavLink } from 'react-router-dom';

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
  const { singleTopicList, requestSingleTopicList, match } = props;
  const { id } = match.params;

  useEffect(() => {
    requestSingleTopicList(id);
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
            <div>
              <Button
                type='button'
                component={NavLink}
                to={`/vforum/group/${id}/topiclist`}
              >
                Create Topic
              </Button>
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

const mapStateToProps = ({ singleTopicList }) => ({
  singleTopicList,
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleTopicList: (id) => dispatch(requestSingleTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
