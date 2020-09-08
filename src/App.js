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
          <Route exact path='/' component={Homescreen} />
          <Route path='/vforum' component={Vforum} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={Register} />
          <Route path='/event' component={EventPage} />
          <Route path='/vmemory' component={Vmemory} />
        </Switch>
      </StylesProvider>
    </div>
  );
}

export default App;
