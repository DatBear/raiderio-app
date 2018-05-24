import { createStore, applyMiddleware } from 'redux';
import createSataMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers';
import RaiderIoSagas from './sagas/RaiderIoSagas';

//create saga middleware
const sagaMiddleware = createSataMiddleware();

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, sagaMiddleware, )
);

sagaMiddleware.run(RaiderIoSagas);

export default store;