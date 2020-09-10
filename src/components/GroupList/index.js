import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import GroupList from './GroupList';

const topics = [
  { discription: 'techs news', posts: 566556, comments: 45, newest: '24 mins' },
  {
    discription: 'techs drip',
    posts: 21312,
    comments: 4390,
    newest: '25 seconds',
  },
  {
    discription: 'techs win',
    posts: 43245,
    comments: 4530,
    newest: '5/6/2020',
  },
];

function index() {
  return (
    <div>
      <Alert icon={false} severity='info'>
        <AlertTitle>Techs</AlertTitle>
        This group is about techs
      </Alert>
      {topics.map((item, index) => {
        const { discription, posts, comments, newest } = item;
        return (
          <GroupList
            key={index}
            discription={discription}
            posts={posts}
            comments={comments}
            newest={newest}
          />
        );
      })}
      <Alert icon={false} severity='info'>
        <AlertTitle>Techs</AlertTitle>
        This group is about techs
      </Alert>
      {topics.map((item, index) => {
        const { discription, posts, comments, newest } = item;
        return (
          <GroupList
            key={index}
            discription={discription}
            posts={posts}
            comments={comments}
            newest={newest}
          />
        );
      })}
      <Alert icon={false} severity='info'>
        <AlertTitle>Techs</AlertTitle>
        This group is about techs
      </Alert>
      {topics.map((item, index) => {
        const { discription, posts, comments, newest } = item;
        return (
          <GroupList
            key={index}
            discription={discription}
            posts={posts}
            comments={comments}
            newest={newest}
          />
        );
      })}
      <Alert icon={false} severity='info'>
        <AlertTitle>Techs</AlertTitle>
        This group is about techs
      </Alert>
      {topics.map((item, index) => {
        const { discription, posts, comments, newest } = item;
        return (
          <GroupList
            key={index}
            discription={discription}
            posts={posts}
            comments={comments}
            newest={newest}
          />
        );
      })}
    </div>
  );
}

export default index;
