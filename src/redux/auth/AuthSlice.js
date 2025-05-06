import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
