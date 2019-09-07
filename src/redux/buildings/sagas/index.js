import { put, takeEvery, takeLatest, call, } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';
import firebase from 'firebase';
import rsf from '../../firebase';

function* syncBuildingsSaga(){
    yield fork(rsf.firestore.syncCollection,
        firebase.firestore().collection('buildings')
            .where('members', 'array-contains', firebase.auth().currentUser.uid),
        {
            successActionCreator: syncBuildings,
            transform: transformBuildings,
        }
    );
}

export default function* buildingsSaga(){
    yield fork(syncBuildingsSaga);
    yield takeEvery(ActionTypes.BUILDINGS.CREATE_REQUESTED);
}