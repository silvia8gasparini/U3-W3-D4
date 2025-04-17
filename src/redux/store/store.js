import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../reducers/favourites';
import resultsReducer from '../reducers/results';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    results: resultsReducer,
  },
});

export default store;
