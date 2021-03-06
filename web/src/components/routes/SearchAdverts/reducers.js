import { SEARCH_ADVERTS_REQUEST, SEARCH_ADVERTS_RESPONSE, SET_FILTERS } from './actions';

export const initialState = {
    loading: true,
    buyAdverts: [],
    sellAdverts: [],
    filters: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ADVERTS_REQUEST:
            return initialState;
        case SEARCH_ADVERTS_RESPONSE:
            return {
                ...state,
                ...action.allAdverts,
                loading: false,
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: action.filters,
            };
        default:
            return state;
    }
};
