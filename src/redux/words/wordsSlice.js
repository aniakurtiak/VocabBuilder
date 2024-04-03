import { createSlice } from '@reduxjs/toolkit';
import { addWord } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  words: [],
  isLoading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWord.pending, handlePending)
      .addCase(addWord.rejected, handleRejected)
      .addCase(addWord.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
