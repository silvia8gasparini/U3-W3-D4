import { FETCH_RESULTS, FETCH_RESULTS_ERROR, FETCH_RESULTS_LOADING } from "../actions";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESULTS_LOADING:
            return {
                ...state, 
                isLoading: true,
                isError: false,
            }
            case FETCH_RESULTS:
                return{
                    ...state,
                    jobs: action.payload,
                    isLoading: false,
                    isError: false,
                }
            case FETCH_RESULTS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            default:
                return state
    }
}

export default resultsReducer