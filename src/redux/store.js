import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sidebar: sidebarReducer,
  },
});
