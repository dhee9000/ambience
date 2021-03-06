import firebase from 'firebase';
import firebaseConfig from '../config/Firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const reduxSagaFirebase = new ReduxSagaFirebase(firebase);

export default reduxSagaFirebase;