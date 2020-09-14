import React from 'react';
import AppBar from './components/NavBar/AppBar';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';

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
import Post from './containers/Post';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StylesProvider injectFirst>
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
          <PrivateRoute
            path='/vforum/group/:groupId/topic/:topicId'
            exact
            component={PostsList}
          />
          <PrivateRoute
            path='/vforum/group/:groupId/topic/:topicId/post/:postId'
            component={Post}
          />
          <PrivateRoute path='/vmemory' component={Vmemory} />
        </Switch>
      </StylesProvider>
    </div>
  );
}

export default App;
