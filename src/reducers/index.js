import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  registerReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
