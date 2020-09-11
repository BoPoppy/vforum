import React from 'react';
import { connect } from 'react-redux';
import { requestTopicList } from '../../actions';
import { useEffect } from 'react';

function Homescreen(props) {
  const { requestTopicList } = props;
  useEffect(() => {
    requestTopicList('5f5ad6fa672ec61dc0c05187');
  }, []);
  return (
    <div>
      <h1>welcome to homescren</h1>
    </div>
  );
}

const mapStateToProps = ({ topicList }) => ({
  topicList,
});

const mapDispatchToProps = (dispatch) => ({
  requestTopicList: (id) => dispatch(requestTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);
