import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    pseudo: null,
    email: null,
    tags: [],
    likedEvents: [],
    avatar: null,
    ville: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
      state.value.email = action.payload.email;
      state.value.avatar = action.payload.avatar;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.pseudo = null;
      state.value.email = null;
    },
    addTags: (state, action) => {
      state.value.tags = action.payload.tags;
    },
    ville: (state, action) => {
      state.value.ville = action.payload.ville;
    },
    updatePhotoUri: (state, action) => {
      state.value.avatar = action.payload;
    },
  },
});

export const { login, logout, addTags, updatePhotoUri, ville } =
  userSlice.actions;
export default userSlice.reducer;
