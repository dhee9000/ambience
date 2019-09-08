import { all, spawn } from 'redux-saga/effects';

import buildingsSaga from './buildings/sagas';
import roomSaga from './rooms/sagas';

const allWatcherSagas = [
    buildingsSaga,
    roomSaga,
];

export default function* rootSaga(){
	console.log('Root Saga Running');
	yield all(
		allWatcherSagas.map(saga => spawn(saga))
	);
}