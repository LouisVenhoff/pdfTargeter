import { createSlice } from "@reduxjs/toolkit";


const positionSlice = createSlice({
    name:"position",
    initialState:{value:{infoKey:"", x:0, y:0}},
    reducers:{
        startNewPos:(state, action) => {
            state.value.infoKey = action.payload;
        }
    }
});


export const {startNewPos} = positionSlice.actions;

export default positionSlice.reducer;