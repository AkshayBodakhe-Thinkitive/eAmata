import AsyncStorage from '@react-native-async-storage/async-storage'
import persistReducer from 'redux-persist/es/persistReducer';
import { rootReducer } from './rootReducer';

const persistConfig = {
    key : 'root',
    version: 1, 
    storage : AsyncStorage,
    whitelist : ['auth']
 }
 
 export const persistedReducer = persistReducer(persistConfig, rootReducer)