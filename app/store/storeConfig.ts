import { ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistedReducer } from './persistConfig';
import { thunk } from 'redux-thunk';

export const createStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(thunk)
    })

    return store;
};

const store = createStore()

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, any>;

export { store, persistor }