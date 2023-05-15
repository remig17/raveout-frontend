import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, pseudo: null, email: null, tags: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
      state.value.email = action.payload.email;

    },
    logout: (state) => {
      state.value.token = null;
      state.value.pseudo = null;
      state.value.email = null;
    },
    addTags: (state, action) => {
      state.value.tags = action.payload;
    }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;