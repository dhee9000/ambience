import { put, takeEvery, takeLatest, call, fork, all } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';

import firebase from 'firebase';
import '@firebase/firestore';

import rsf from '../../firebase';

const processBuildingsResponse = payload => {
    var buildings = [];
    payload.forEach(building => {
        let bData = building.data();
        bData.id = building.id;
        buildings.push(bData);
    })
}

function* watchBuildingsRequested(){
    yield takeEvery(ActionTypes.BUILDINGS.REQUESTED, function* fetchBuildingsSaga(){
        const snapshot = yield call(rsf.firestore.getCollection,
            firebase.firestore().collection('buildings').where('members', 'array-contains', firebase.auth().currentUser.uid));
        buildings = processBuildingsResponse(snapshot.docs);
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