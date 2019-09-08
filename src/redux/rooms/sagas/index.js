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

const roomSagas = [
    watchRoomRequested
];

export default function* roomSaga(){
	yield all(
		roomSagas.map(saga => fork(saga))
	);
}