import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { sagaWatcherDefault } from './sagas/sagaRoots';

const _developmentMode: boolean = process.env.NODE_ENV === "development";

/**
 * @method _composeEnhancers
 * @description : definition of Function to be used in store creation - in this case hooks up to redux-devtools-extension and Chrome browser extension in development mode
 */
const _composeEnhancers: Function =
	_developmentMode
		? composeWithDevTools
		: null || compose;

const _sagaMiddlewareOptions: object = {
	sagaMonitor: {}
};
const _sagaMiddleware: SagaMiddleware = createSagaMiddleware(_sagaMiddlewareOptions);
const store: Store = createStore(
	reducers,
	_composeEnhancers(applyMiddleware(_sagaMiddleware)));

_sagaMiddleware.run(sagaWatcherDefault);

export { store };