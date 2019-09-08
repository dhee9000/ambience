import * as ActionTypes from '../../ActionTypes';

const buildings = (state = [], action={}) => {
    switch(action.type){
        case ActionTypes.ROOM.FETCHED:
            return [
                ...state,
                ...action.buildings
            ]
        default:
            return state;
    }
}

export default buildings;