import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { likedEvents: [], eventId: "" },
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
    getEventById: (state, action) => {
      state.value.eventId = action.payload;
    },
  },
});

export const { addEventToLike, removeEventFromLike, getEventById } =
  userSlice.actions;
export default userSlice.reducer;
