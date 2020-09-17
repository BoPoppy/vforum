import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import GroupList from './GroupList';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestTopicList } from '../../actions';
import { NavLink } from 'react-router-dom';

function ViewGroup(props) {
  const { name, createdBy, createdAt, id, requestTopicList, topicList } = props;

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
    <div>
      <Alert icon={false} severity='info'>
        <AlertTitle>
          <NavLink to={`/vforum/group/${id}/topic`}>{name}</NavLink>
        </AlertTitle>
        <div>
          <Typography>By: {createdBy}</Typography>
          <Typography>Date created: {createdAt}</Typography>
        </div>
      </Alert>

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
              createdAt={createdAt}
              createdBy={createdBy}
            />
          );
        })}
    </div>
  );
}

const mapStateToProps = ({ topicList }) => ({ topicList });

const mapDispatchToProps = (dispatch) => ({
  requestTopicList: (id) => dispatch(requestTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroup);
