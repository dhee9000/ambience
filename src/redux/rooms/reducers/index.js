import * as ActionTypes from '../../ActionTypes';
import { combineReducers } from 'redux';

const buildingRooms = (state = [], action = {}) =>{
    switch (action.type){
        case ActionTypes.ROOM.FETCHED:
            return [...new Set([ ...state, action.room,])]
        default:
            return state;
    }
}

const byBuildingId = (state={}, action={}) => {
    switch(action.type){
        case ActionTypes.ROOM.FETCHED:
            return {
                [action.room.building]: buildingRooms(state[action.room.building], action)
            };
        default:
            return state;
    }
}

const byId = (state = {}, action = {}) => {
    switch(action.type){
        case ActionTypes.ROOM.FETCHED:
            return {
                [action.room.id]: action.room,
            };
        default:
                return state;
    }
}

const rooms = combineReducers({byBuildingId, byId})

export default rooms;