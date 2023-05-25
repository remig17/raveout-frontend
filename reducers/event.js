import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { likedEvents: [], eventId: "", tickets: [] },
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
      state.value.likedEvents = [];
    },
    importDatabase: (state, action) => {
      state.value.likedEvents = action.payload;
    },
    addTicket: (state, action) => {
      state.value.tickets.push(action.payload);
    },
    clearTicket: (state) => {
      state.value.tickets = [];
    },
  },
});

export const {
  addEventToLike,
  removeEventFromLike,
  getEventById,
  clearEvent,
  importDatabase,
  addTicket,
  clearTicket,
} = userSlice.actions;
export default userSlice.reducer;
