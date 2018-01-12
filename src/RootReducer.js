import { combineReducers } from 'redux';

import drummachine from './reducers/Drummachine';

const rootReducer = combineReducers({
  drummachine
});

export default rootReducer;
