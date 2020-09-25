import React from 'react';
import AppBar from './components/NavBar/AppBar';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Vforum from './containers/VforumPage/Vforum';
import Vmemory from './containers/VmemoryPage/Vmemory';
import Homescreen from './containers/Homescreen/Homescreen';
import LoginForm from './containers/loginForm/LoginForm';
import EventPage from './containers/EventPage/EventPage';
import Register from './containers/RegisterForm/Register';
import GlobalLoading from './components/GlobalLoading';
import PopoverMessage from './components/PopoverMessage';
import PrivateRoute from './common/PrivateRoute';
import Settings from './containers/Settings';
import PostsList from './containers/PostsList/PostsList';
import TopicList from './containers/TopicList';
import Post from './containers/Post';
import UserList from './containers/UserList';
import GroupList from './containers/GroupList';
import TopicListMod from './containers/TopicListMod';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GlobalLoading />
      <AppBar />
      <PopoverMessage />
      <Switch>
        <PrivateRoute exact path='/' component={Homescreen} />
        <PrivateRoute path='/vforum' exact component={Vforum} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/event' component={EventPage} />
        <PrivateRoute path='/settings' component={Settings} />
        <PrivateRoute path='/userlist' component={UserList} />
        <PrivateRoute path='/grouplist' component={GroupList} />
        <PrivateRoute
          path='/vforum/group/:id/topiclist'
          component={TopicListMod}
        />
        <PrivateRoute
          path='/vforum/group/:id/topic'
          exact
          component={TopicList}
        />
        <PrivateRoute
          exact
          path='/vforum/group/:groupId/topic/:topicId/post'
          component={PostsList}
        />
        <PrivateRoute
          exact
          path='/vforum/group/:groupId/topic/:topicId/post/:postId'
          component={Post}
        />
        <PrivateRoute path='/vmemory' component={Vmemory} />
      </Switch>
    </div>
  );
}

export default App;
