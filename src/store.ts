// Store: reúne todos los reductores, mantiene y cambia el estado de toda la aplicación (solo 1 store).

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;