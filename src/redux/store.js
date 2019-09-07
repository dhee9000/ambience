import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import reducers from './reducers';

import rootSaga from './sagas';

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;



export default function setupReduxStore(){
	const saga = createSagaMiddleWare();
	const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));
	saga.run(rootSaga);
	return store;
}