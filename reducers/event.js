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
      state.value.likedEvents = state.value.likedEvents.filter(
        (event) => event._id !== action.payload._id
      );
    
    },
    getEventById: (state, action) => {
      state.value.eventId = action.payload;
    },
    clearEvent: (state) => {
      state.value.likedEvents = []
    }
  },
});

export const { addEventToLike, removeEventFromLike, getEventById, clearEvent} =
  userSlice.actions;
export default userSlice.reducer;
