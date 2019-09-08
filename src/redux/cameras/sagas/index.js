import { put, takeEvery, takeLatest, call, fork, all } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';

import firebase from 'firebase';
import '@firebase/firestore';

import rsf from '../../firebase';

function* watchCameraRequested(){
    yield takeEvery(ActionTypes.CAMERA.REQUESTED, function* fetchCameraSaga(action){
        const snapshot = yield call(rsf.firestore.getDocument, firebase.firestore().collection('cameras').doc(action.cameraId));
        camera = snapshot.data();
        camera.id = snapshot.id;
        yield put({type: ActionTypes.CAMERA.FETCHED, camera});
    })
}

function* watchCamerasofRoomRequested(){
    yield takeEvery(ActionTypes.ROOM.CAMERAS_REQUESTED, function* fetchRoomCamerasSaga(action){
        const snapshot = yield call(rsf.firestore.getCollection, firebase.firestore().collection('cameras').where('room', '==', action.room.id));
        cameras = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        for(var i = 0; i< cameras.length; i++){
            yield put({type: ActionTypes.CAMERA.FETCHED, camera: cameras[i]});
        }
    })
}

const cameraSagas = [
    watchCameraRequested,
    watchCamerasofRoomRequested
];

export default function* cameraSaga(){
	yield all(
		cameraSagas.map(saga => fork(saga))
	);
}