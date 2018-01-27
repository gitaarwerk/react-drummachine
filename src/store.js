import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './RootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
