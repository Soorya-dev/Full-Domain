import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },  // Corrected initialState
  reducers: {
    increment(state) {
      state.counter += 1;  // Corrected modification of state
    },
    decrement(state) {
      state.counter -= 1;  // Corrected modification of state
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,  // Corrected the reducer key
  },
});

export const { increment, decrement } = counterSlice.actions;

export default store;
