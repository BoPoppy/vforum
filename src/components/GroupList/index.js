import React, { useEffect, useState } from 'react';

import GroupList from './GroupList';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestTopicList } from '../../actions';
import { NavLink } from 'react-router-dom';
import * as moment from 'moment';
import './style.css';

const useStyles = makeStyles((theme) => ({
  paper: { backgroundColor: '#fffffa' },
  groupStyle: {
    paddingBottom: theme.spacing(2),
  },
  bigGroupTitle: {
    backgroundColor: '#a6d4fa',
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#005f85',
    '&:hover, &:focus': {
      color: '#005f85',
    },
    textTransform: 'capitalize',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  groupByAt: {
    display: 'flex',
    marginLeft: theme.spacing(1),
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
}));

function ViewGroup(props) {
  const { name, createdBy, createdAt, id, requestTopicList, topicList } = props;

  const classes = useStyles();

  useEffect(() => {
    requestTopicList(id);
  }, []);

  useEffect(() => {
    setstate(newTopicList());
  }, [topicList]);

  const [state, setstate] = useState([]);

  const newTopicList = () => {
    for (let i = 0; i < topicList.length; i++) {
      if (topicList[i].groupId === id) {
        return topicList[i].topicList;
      }
    }
  };

  return (
    <div className={classes.groupStyle}>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.bigGroupTitle}>
          <NavLink
            to={`/vforum/group/${id}/topic`}
            className={classes.groupTitle}
          >
            {name}
          </NavLink>

          <div className={classes.groupByAt}>
            <Typography className={classes.groupByAtChild}>
              By:&nbsp;
            </Typography>
            <Typography className={classes.groupByAtChild1}>
              {createdBy},&nbsp;
            </Typography>
            <Typography className={classes.groupByAtChild}>
              Date:&nbsp;
            </Typography>
            <Typography className={classes.groupByAtChild1}>
              {createdAt}
            </Typography>
          </div>
        </div>

        {state &&
          state.map((item2, index2) => {
            const { name, createdAt, createdBy, _id, description } = item2;
            return (
              <GroupList
                key={index2}
                topicId={_id}
                groupId={id}
                name={name}
                description={description}
                createdAt={moment(createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                  .toDate()
                  .toString()
                  .split(' ')
                  .slice(0, 5)
                  .join(' ')}
                createdBy={createdBy}
              />
            );
          })}
      </Paper>
    </div>
  );
}

const mapStateToProps = ({ topicList }) => ({ topicList });

const mapDispatchToProps = (dispatch) => ({
  requestTopicList: (id) => dispatch(requestTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroup);
