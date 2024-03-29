import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const fetchCategories = createAsyncThunk(
  'filters/fetchCategories',
  async (_, { thunkAPI }) => {
    try {
      const { data } = await axios.get('/words/categories');
      const categories = data.map(category => ({
        value: capitalizeFirstLetter(category),
        label: capitalizeFirstLetter(category),
      }));
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
