import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';


export const addWord = createAsyncThunk(
  'words/addWord',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/words/create', text);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);