import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addCounter: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        value: action.payload.startValue || 0,
      });
    },
    removeCounter: (state, action) => {
      return state.filter((counter) => counter.id !== action.payload);
    },
    increment: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value += 1;
      }
    },
    decrement: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value -= 1;
      }
    },
    reset: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value = counter.startValue || 0;
      }
    },
    editCounterName: (state, action) => {
      const counter = state.find((c) => c.id === action.payload.id);
      if (counter) {
        counter.name = action.payload.name;
      }
    },
  },
});

export const {
  addCounter,
  removeCounter,
  increment,
  decrement,
  reset,
  editCounterName,
} = counterSlice.actions;

export const selectCounters = (state) => state.counter;

export default counterSlice.reducer;
