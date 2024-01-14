/* eslint-disable functional/no-expression-statements */
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  day: 0,
  month: 0,
  year: 0,
};

const date = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    dateReducer: date.reducer,
  },
});

export const {
  setDay, setMonth, setYear,
} = date.actions;
