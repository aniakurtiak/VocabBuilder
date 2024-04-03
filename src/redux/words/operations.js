import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';


export const addWord = createAsyncThunk(
  'words/addWord',
  async (values, thunkAPI) => {
    try {
      const lowercaseValues = {
        ...values,
        category: values.category.toLowerCase(),
      };
      const response = await axios.post('/words/create', lowercaseValues);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const fetchOwnWords = createAsyncThunk(
  'words/fetchOwnWords',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/own');
      console.log(response.data);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);