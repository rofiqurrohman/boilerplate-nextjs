import { configureStore } from '@reduxjs/toolkit';
import rootSlice from '@/containers/state/app.slice';
import userSlice from '@/containers/state/user.slice';

const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
    user: userSlice.reducer,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxStoreDispatch = typeof store.dispatch;

export default store;
