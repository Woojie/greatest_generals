import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const SagaMiddleWare = createSagaMiddleware()

const store = createStore(
  applyMiddleware(logger, SagaMiddleWare)
)


export default store