// features/search/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload; // Обновляем строку поиска
    },
    clearQuery: (state) => {
      state.query = ''; // Очищаем строку поиска
    },
  },
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
