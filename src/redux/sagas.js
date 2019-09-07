import { all, spawn } from 'redux-saga/effects';

const allWatcherSagas = [

];

export default function* rootSaga(){
	console.log('Root Saga Running');
	yield all(
		allWatcherSagas.map(saga => spawn(saga))
	);
}