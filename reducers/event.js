import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { likedEvents: [] },
};

export const userSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEventToLike: (state, action) => {
      state.value.likedEvents.push(action.payload);
    },
    removeEventFromLike: (state, action) => {
      state.value.likedEvents = state.likedEvents.filter(
        (event) => event.name !== action.payload.name
      );
    },
  },
});

export const { addEventToLike, removeEventFromLike } = userSlice.actions;
export default userSlice.reducer;
