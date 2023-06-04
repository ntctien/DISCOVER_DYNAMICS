import {FETCH_DESTINATIONS_PENDING, FETCH_DESTINATIONS_SUCCESS, FETCH_DESTINATIONS_ERROR} from '../actions/destinations';

const initialState = {
    pending: false,
    destinations: [],
    error: null
}

export function destinationsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DESTINATIONS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_DESTINATIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                destinations: action.payload
            }
        case FETCH_DESTINATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
