import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

export const changeActive = createSlice({
  name: "change",
  initialState,
  reducers: {
    home: (state) => {
      state.value = "home";
    },
    likedList: (state) => {
      state.value = "liked-list";
    },
    watchedList: (state) => {
      state.value = "watched-list";
    },
    contact: (state) => {
      state.value = "contact";
    },
  },
});

// Action creators are generated for each case reducer function
export const { home, likedList, watchedList, contact } = changeActive.actions;

export default changeActive.reducer;
