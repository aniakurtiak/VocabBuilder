import { createSlice } from '@reduxjs/toolkit';
import { addWord, addWordFromOtherUser, deleteWord, editWord, fetchAllWords, fetchOwnWords } from './operations';

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
  selectedWord: null,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setSelectedWord(state, action) {
      state.selectedWord = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addWord.pending, handlePending)
      .addCase(addWord.rejected, handleRejected)
      .addCase(addWord.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOwnWords.pending, handlePending)
      .addCase(fetchOwnWords.rejected, handleRejected)
      .addCase(fetchOwnWords.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteWord.pending, handlePending)
      .addCase(deleteWord.rejected, handleRejected)
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editWord.pending, handlePending)
      .addCase(editWord.rejected, handleRejected)
      .addCase(editWord.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllWords.pending, handlePending)
      .addCase(fetchAllWords.rejected, handleRejected)
      .addCase(fetchAllWords.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addWordFromOtherUser.pending, handlePending)
      .addCase(addWordFromOtherUser.rejected, handleRejected)
      .addCase(addWordFromOtherUser.fulfilled, (state, action) => {
        state.words = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { setSelectedWord } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;

