import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';



export const slice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = slice.actions;

const persistConfig = {
  key: 'root',
  storage,
  // blackList:[],
  //   whitelist:[],
};

export const persistSliceReducer = persistReducer(persistConfig, slice.reducer);
