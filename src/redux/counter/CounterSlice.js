import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: localStorage.getItem('count') || 0
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.count += 1;
      localStorage.setItem('count', state.count);
    },
    setDecrement: (state) => {
      state.count -= 1;
      localStorage.setItem('count', state.count);
    }
  }
});

export const { setIncrement, setDecrement } = CounterSlice.actions;
export default CounterSlice.reducer;
