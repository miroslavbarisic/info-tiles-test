import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import devicesReducer from './features/devices/devicesSlice.js';

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
  },
});

setupListeners(store.dispatch);
