import * as ActionTypes from '../../ActionTypes';

const buildings = (state = [], action={}) => {
    switch(action.type){
        case ActionTypes.BUILDINGS.FETCHED:
            return [
                ...action.buildings
            ]
        default:
            return state;
    }
}

export default buildings;