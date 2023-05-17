import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, pseudo: null, email: null, tags: [] },
};

export const userSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
  
    addEventToLike: (state, action) => {
      console.log("actionPayload", action.payload)
      state.value.tags = action.payload;
      
    },
    removeEventFromLike: (state, action) => {

    }
  },
});

export const { addEventToLike, removeEventFromLike } = userSlice.actions;
export default userSlice.reducer;
