import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
    list: [],
  };
  
  const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      case REMOVE_FROM_FAVORITES:
        return {
          ...state,
          list: state.list.filter((company) => company !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default favouritesReducer;
  