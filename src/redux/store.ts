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

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxPersistStorage, // MMKVStorage,
  blacklist: [], // these reduce will not persist data
  whitelist: ['counter'], // these reduce will persist data
};

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
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
    }),
});

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