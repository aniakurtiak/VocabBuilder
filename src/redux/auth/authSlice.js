import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

function isPendingAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/pending');
}
function isFulfilledAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/fulfilled');
}
function isRejectedAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/rejected');
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addMatcher(isPendingAction, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isFulfilledAction, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
