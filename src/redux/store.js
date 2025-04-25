import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './assetsSlice';

const store = configureStore({
  reducer: {
    assets: assetsReducer
  }
});

export default store;
