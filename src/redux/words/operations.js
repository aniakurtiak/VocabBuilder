import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';


export const addWord = createAsyncThunk(
  'words/addWord',
  async (values, thunkAPI) => {
    try {
      // Перетворення значень на малі літери перед відправкою
      const lowercaseValues = {
        ...values,
        category: values.category.toLowerCase(),
        // Якщо isIrregular передається як булеве значення, додайте тут логіку для його перетворення
      };
      
      const response = await axios.post('/words/create', lowercaseValues);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
