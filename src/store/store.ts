// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import reportReducer from '../features/reports/reportSlice';

const store = configureStore({
    reducer: {
      reports: reportReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;