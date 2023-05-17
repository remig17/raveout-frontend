import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
    const initialState = {
        value: { token: null, pseudo: null, email: null, tags: [], likedEvents: [], },
      };
  name: 'event',
  initialState,
  reducers: {



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEventToLike: (state, action) => {
        state.likedEvents.push(action.payload);
      },
      removeEventFromLike: (state, action) => {
        state.likedEvents = state.likedEvents.filter(
          (event) => event.name !== action.payload.name
        );
      },
  },
});

export const { login, logout, addTags, addEventToLike, removeEventFromLike } = userSlice.actions;
export default userSlice.reducer;

   
  },
});

export const { addEventToLike, removeEventFromLike } = userSlice.actions;
export default userSlice.reducer;
