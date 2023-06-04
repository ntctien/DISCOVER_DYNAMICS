export const FETCH_DESTINATIONS_PENDING = 'FETCH_DESTINATIONS_PENDING';
export const FETCH_DESTINATIONS_SUCCESS = 'FETCH_DESTINATIONS_SUCCESS';
export const FETCH_DESTINATIONS_ERROR = 'FETCH_DESTINATIONS_ERROR';

export const fetchDestinationsPending = () => {
    return {
        type: FETCH_DESTINATIONS_PENDING
    }
}

export const fetchDestinationsSuccess = (destinations) => {
    return {
        type: FETCH_DESTINATIONS_SUCCESS,
        payload: destinations
    }
}

export const fetchDestinationsError = (error) => {
    return {
        type: FETCH_DESTINATIONS_ERROR,
        error: error
    }
}