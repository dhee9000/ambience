import { put, takeEvery, takeLatest, call, fork, all } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';

import firebase from 'firebase';
import '@firebase/firestore';

import rsf from '../../firebase';

function* watchDeviceRequested(){
    yield takeEvery(ActionTypes.DEVICE.REQUESTED, function* fetchDeviceSaga(action){
        const snapshot = yield call(rsf.firestore.getDocument, firebase.firestore().collection('devices').doc(action.deviceId));
        device = snapshot.data();
        device.id = snapshot.id;
        yield put({type: ActionTypes.DEVICE.FETCHED, device});
    })
}

function* watchDevicesofRoomRequested(){
    yield takeEvery(ActionTypes.ROOM.DEVICES_REQUESTED, function* fetchRoomDevicesSaga(action){
        const snapshot = yield call(rsf.firestore.getCollection, firebase.firestore().collection('devices').where('room', '==', action.room.id));
        devices = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        for(var i = 0; i< devices.length; i++){
            yield put({type: ActionTypes.DEVICE.FETCHED, device: devices[i]});
        }
    })
}

const devicesSagas = [
    watchDeviceRequested,
    watchDevicesofRoomRequested
];

export default function* devicesSaga(){
	yield all(
		devicesSagas.map(saga => fork(saga))
	);
}