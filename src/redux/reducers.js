import { combineReducers } from 'redux';

import buildings from './buildings/reducers';
import rooms from './rooms/reducers';

export default combineReducers({
    buildings,
    rooms,
    default: () => ({})
});