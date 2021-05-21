import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userId",
  initialState: {
    value: "",
    books: [],
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addBook: (state, action) => {
      state.books.append(action.payload);
    },
    getBooks: (state, action) => {
      state.books=action.payload;
    },
  },
});

export const { setValue,addBook,getBooks } = userSlice.actions;
export const userId = (state) => state.counter.value;
export const books = (state) => state.counter.books;
export default userSlice.reducer;
