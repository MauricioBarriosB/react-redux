import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: string[]; // Array nombre de libros
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

     // * Reducers: Son funciones que implementan acciones, cambian el estado de la aplicación:

    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;