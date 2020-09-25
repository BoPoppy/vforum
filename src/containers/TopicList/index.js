import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestSingleTopicList, getGroupRequest } from '../../actions';
import ViewTopicList from '../../components/ViewTopicList';
import * as moment from 'moment';
import { NavLink } from 'react-router-dom';
import { getUserRole } from '../../common/auth';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  topicList: {
    paddingTop: theme.spacing(2),
    backgroundColor: '#efefed',
    height: '100vh',
  },
  paper: {
    backgroundColor: '#f0f5f5',
    padding: theme.spacing(2),
  },
  groupTitle: {},
  groupTitleChild: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: theme.spacing(1),
  },
  createdByAt: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  groupByAtChild: {
    fontSize: 14,
    lineHeight: 1.25,
    marginBottom: '5px',
  },
  groupByAtChild1: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'italic',
    lineHeight: 1.25,
  },
  groupByAtChild2: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: theme.spacing(1),
    fontStyle: 'italic',
    lineHeight: 1.25,
  },
  topicPaper: { marginTop: theme.spacing(1), marginBottom: theme.spacing(1) },
  button: {
    color: 'black',
    '&:hover, &:focus': {
      color: 'black',
    },
  },
}));
function PostsList(props) {
  const {
    singleTopicList,
    requestSingleTopicList,
    match,
    getGroupRequest,
    getGroup,
  } = props;
  const { id } = match.params;
  const userRole = getUserRole();

  useEffect(() => {
    requestSingleTopicList(id);
    getGroupRequest(id);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.topicList}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.middle}>
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.groupTitle}>
              <Typography className={classes.groupTitleChild}>
                {getGroup.name}
              </Typography>
              <Divider variant='middle' />
              <div className={classes.createdByAt}>
                <Typography className={classes.groupByAtChild}>
                  By:&nbsp;
                </Typography>
                <Typography className={classes.groupByAtChild1}>
                  {getGroup.createdBy},&nbsp;
                </Typography>
                <Typography className={classes.groupByAtChild}>
                  Date:&nbsp;
                </Typography>
                <Typography className={classes.groupByAtChild2}>
                  {moment(getGroup.createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                    .toDate()
                    .toString()
                    .split(' ')
                    .slice(0, 5)
                    .join(' ')}
                </Typography>
              </div>
            </div>
            <Paper elevation={2} className={classes.topicPaper}>
              {singleTopicList &&
                singleTopicList.map((item, key) => {
                  const { name, createdBy, createdAt, _id, description } = item;
                  return (
                    <div>
                      <ViewTopicList
                        key={key}
                        title={name}
                        createdAt={createdAt}
                        createdBy={createdBy}
                        description={description}
                        groupId={id}
                        topicId={_id}
                      />
                    </div>
                  );
                })}
            </Paper>
            {userRole === 'admin' || userRole === 'moderator' ? (
              <Button
                type='button'
                component={NavLink}
                variant='contained'
                to={`/vforum/group/${id}/topiclist`}
                startIcon={<AddIcon />}
                className={classes.button}
              >
                Create Topic
              </Button>
            ) : null}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}></Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ singleTopicList, getGroup }) => ({
  singleTopicList,
  getGroup,
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleTopicList: (id) => dispatch(requestSingleTopicList(id)),
  getGroupRequest: (id) => dispatch(getGroupRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
