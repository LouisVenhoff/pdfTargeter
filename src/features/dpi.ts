import {createSlice} from "@reduxjs/toolkit";


export const dpiSlice = createSlice({
    name:"dpi",
    initialState:{value:{dpi:82}},
    reducers:{
        changeDpi:(state, action) => {
            state.value.dpi = action.payload;
        }
    }
});

export const {changeDpi} = dpiSlice.actions;

export default dpiSlice.reducer;