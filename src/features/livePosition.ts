import { createSlice } from "@reduxjs/toolkit";


const livePositoinSlice = createSlice({
    name:"livePosition",
    initialState:{value:{x:0, y:0, page:0}},
    reducers:{
        updatePosition:(state, action) => {
            state.value = action.payload;
        }
    }
});

export const {updatePosition} = livePositoinSlice.actions;

export default livePositoinSlice.reducer;