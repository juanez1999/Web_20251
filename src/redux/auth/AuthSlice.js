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
    clearUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, clearUser } = AuthSlice.actions;
export default AuthSlice.reducer;
