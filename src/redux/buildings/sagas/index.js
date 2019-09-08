import { put, takeEvery, takeLatest, call, fork, all } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';

import firebase from 'firebase';
import '@firebase/firestore';

import rsf from '../../firebase';

function* watchBuildingsRequested(){
    yield takeEvery(ActionTypes.BUILDINGS.REQUESTED, function* fetchBuildingsSaga(){
        const snapshot = yield call(rsf.firestore.getCollection,
            firebase.firestore().collection('buildings').where('members', 'array-contains', firebase.auth().currentUser.uid));
        buildings = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        yield put({type: ActionTypes.BUILDINGS.FETCHED, buildings});
    });
}

const buildingsSagas = [
    watchBuildingsRequested
];

export default function* buildingsSaga(){
	yield all(
		buildingsSagas.map(saga => fork(saga))
	);
}