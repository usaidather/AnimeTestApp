import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favouriteReducer from './FavouriteSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  favourites: favouriteReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  // whitelist: ['favourites'],
  blacklist: ['rfavourites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
