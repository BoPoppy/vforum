import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  registerReducer,
  isLoading: loadingReducer,
  loginReducer,
});

export default rootReducer;
