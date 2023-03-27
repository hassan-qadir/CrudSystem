import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 export const userRead = createAsyncThunk('userRead', async(arg, {rejectWithValue})=>{
     const response = await fetch('https://6421818034d6cd4ebd74e516.mockapi.io/crud')
     try {
        const result = await response.json();
        return result;
     } catch (error) {
        return rejectWithValue(error.response);
     }
    }
);


export const ReadSlice = createSlice({
name: 'ReadSlice',
initialState: {
    users: [],
    user: [],
    loading: false,
    error:null,
},
reducers: {
   ViewData: (state, action) =>{
    state.user.push(action.payload);
   },
},
extraReducers : {
 [userRead.pending] : (state) => {
    state.loading = true;
 },
 [userRead.fulfilled] : (state,action) =>{
    state.loading = false;
    state.users = action.payload;
 },
 [userRead.rejected] : (state, action) =>{
    state.loading = false;
    state.error = action.payload;
 },
}
})

export const {ViewData} = ReadSlice.actions;
export default ReadSlice.reducer;