// Slicers: combina reducers y actions.

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState { value : number; }
const initialState: CounterState = { value : 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    // * Reducers: Son funciones que implementan acciones, cambian el estado de la aplicación:
    
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});
export const { increment, decrement, setCount } = counterSlice.actions;
export default counterSlice.reducer;