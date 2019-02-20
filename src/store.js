import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './saga/saga'
import { combinedRedcuers } from "./reducers/index";

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
  combinedRedcuers,
  applyMiddleware(logger, sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)


export default store