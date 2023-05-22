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
      console.log("logReducer", action.payload)
      state.value.likedEvents = state.likedEvents.filter(
        (event) => event.name !== action.payload.name
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
