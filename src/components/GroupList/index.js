import React, { useEffect } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import GroupList from './GroupList';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestTopicList } from '../../actions';

function ViewGroup(props) {
  const { name, createdBy, createdAt, id, requestTopicList, topicList } = props;
  useEffect(() => {
    requestTopicList(id);
  }, []);
  return (
    <div>
      <Alert icon={false} severity='info'>
        <AlertTitle>{name}</AlertTitle>
        <div>
          <Typography>By: {createdBy}</Typography>
          <Typography>Date created: {createdAt}</Typography>
        </div>
      </Alert>
      {topicList.map((item, index) => {
        const { name, createdAt, createdBy, _id, description } = item;
        return (
          <GroupList
            key={index}
            id={_id}
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

const mapStateToProps = ({ topicList }) => ({
  topicList,
});

const mapDispatchToProps = (dispatch) => ({
  requestTopicList: (id) => dispatch(requestTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroup);
