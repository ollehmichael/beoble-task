import { combineReducers } from 'redux';
import ensReducer from './ens/reducer';

const appReducer = combineReducers({
  ens: ensReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
