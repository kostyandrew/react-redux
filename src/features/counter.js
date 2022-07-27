import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: 0};

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        incremented: (state) => {
            state.value++;
        },
        decremented: (state) => {
            state.value--;
        }
    }
})

export const { set, incremented, decremented } = slice.actions;


export const countToTen = () => async (dispatch) => {
    for(let i = 0; i < 10; i++) {
        await delay(1000);
        dispatch(incremented());
    }
};

const delay = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));


export default slice.reducer;
