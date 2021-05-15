import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './phonebook/phonebook-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: { phonebook: persistedReducer },
  // devTools: process.env.NODE_ENV === 'development',
  middleware,
  devTools,
});

const persistor = persistStore(store);

export default { store, persistor };
