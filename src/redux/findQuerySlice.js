import { createSlice } from "@reduxjs/toolkit";

const queryInitialState = {
  findQuery: "",
};

const findQuerySlice = createSlice({
  name: "findQuery",
  initialState: queryInitialState,
  reducers: {
    setFindQuery(state, action) {
      state.findQuery = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setFindQuery } = findQuerySlice.actions;
export const findQueryReducer = findQuerySlice.reducer;