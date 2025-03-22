import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit';
import counterSlice from '#slices/counterSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {reduxPersistStorage} from '#utils/MMKVStorage';
import persistStore from 'redux-persist/es/persistStore';
import { APIServices } from '#apis/APIServices';
import { setupListeners } from '@reduxjs/toolkit/query';
import homeSlice from '#slices/homeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxPersistStorage, // MMKVStorage,
};

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  home: homeSlice.reducer,
  [APIServices.reducerPath]: APIServices.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //
      },
    }).concat(APIServices.middleware),
});

setupListeners(store.dispatch);

export default store;

export const persistor = persistStore(store);

// set types
// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>