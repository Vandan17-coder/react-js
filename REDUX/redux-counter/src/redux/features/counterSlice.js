import { createSlice } from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name: 'counter',

    initialState : {
        value: 0,
    },

    reducers: {
        increment: (s) => {
            s.value += 1;
        },

        decrement: (s) => {
            s.value -= 1;
        },
    },
})

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
