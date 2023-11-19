import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { AppState } from '../models/types';

const initialState = {
  searchTerm: '',
  data: [],
  pageSize: 5,
  currentPage: 1,
  isListLoading: false,
  isDetailsLoading: false,
  details: null,
};

export const fetchData = createAsyncThunk('fetch-data', async () => {
  const response = await fetch('DB_LINK', { method: 'GET' });
  const data = await response.json();
  return data;
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHeroExist(state) {
      state.isHeroExist = true;
    },
    setHeroDontExist(state) {
      state.isHeroExist = false;
    },
    toggleMenu(state, action) {
      state.isMenuOpen = action.payload.open;
    },
    showModal(state, action) {
      state.notification = action.payload.note;
    },
    closeModal(state) {
      state.notification = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchOneCard.fulfilled, (state, action) => action.payload);
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
