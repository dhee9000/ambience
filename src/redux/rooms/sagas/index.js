import { put, takeEvery, takeLatest, call, fork, all } from 'redux-saga/effects';
import * as ActionTypes from '../../ActionTypes';

import firebase from 'firebase';
import '@firebase/firestore';

import rsf from '../../firebase';

function* watchRoomRequested(){
    yield takeEvery(ActionTypes.ROOM.REQUESTED, function* fetchRoomSaga(action){
        const snapshot = yield call(rsf.firestore.getDocument, firebase.firestore().collection('rooms').doc(action.roomId));
        room = snapshot.data();
        room.id = snapshot.id;
        yield put({type: ActionTypes.ROOM.FETCHED, room});
    })
}

function* watchRoomsOfBuildingRequested(){
    yield takeEvery(ActionTypes.BUILDINGS.ROOMS_REQUESTED, function* fetchBuildingRoomsSaga(action){
        const snapshot = yield call(rsf.firestore.getCollection, firebase.firestore().collection('rooms').where('building', '==', action.building.id));
        rooms = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        for(var i = 0; i< rooms.length; i++){
            yield put({type: ActionTypes.ROOM.FETCHED, room: rooms[i]});
        }
    })
}

const roomSagas = [
    watchRoomRequested,
    watchRoomsOfBuildingRequested
];

export default function* roomSaga(){
	yield all(
		roomSagas.map(saga => fork(saga))
	);
}