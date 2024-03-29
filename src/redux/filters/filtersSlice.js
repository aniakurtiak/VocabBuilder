import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const initialState = {
  categories: [],
  selectedCategory: '',
  searchKeyword: '',
  selectedVerbType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setKeyword(state, action) {
      state.searchKeyword = action.payload;
    },
    setVerbType(state, action) {
      state.selectedVerbType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories = [];
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.categories = [];
      });
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setCategory, setKeyword, setVerbType } = filtersSlice.actions;
