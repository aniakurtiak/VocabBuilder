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

export const addWordFromOtherUser = createAsyncThunk(
  'words/addWordFromOtherUser',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/words/add/${id}`, id);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchOwnWords = createAsyncThunk(
  'words/fetchOwnWords',
  async ({ page, perPage }, thunkAPI) => {
    try {
      const response = await axios.get(`/words/own?page=${page}&perPage=${perPage}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const fetchAllWords = createAsyncThunk(
  'words/fetchAllWords',
  async ({ page, perPage }, thunkAPI) => {
    try {
      const response = await axios.get(`/words/all?page=${page}&perPage=${perPage}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/words/delete/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (updatedValues, thunkAPI) => {
    try {
      const { id, ...otherValues } = updatedValues;
      console.log(id);
      const response = await axios.patch(`/words/edit/${id}`, otherValues);
      console.log(response.data);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
