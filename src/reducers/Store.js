import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { combineReducers } from 'redux';
import userReducer from './userReducer'
import settingsReducer from './settingsReducer';




const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['user',"settings"]
  }

const rootReducer = combineReducers({
    user:userReducer,
    settings:settingsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on


let persistor = persistStore(store)
const Store = () =>{
    return {
        store,
        persistor
    }
}

export default Store