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

export const DeleteUser = createAsyncThunk('DeleteUser', async(id, {rejectWithValue})=>{
   const response = await fetch(`https://6421818034d6cd4ebd74e516.mockapi.io/crud/${id}`,{method : 'DELETE'});
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
    editUser: [],
    loading: false,
    error:null,
},
reducers: {
   ViewData: (state, action) =>{
    state.user.push(action.payload);
   },
   EditFind: (state, action) =>{
      console.log(action.payload);
     state.editUser = state.users.filter((item) => item.id === action.payload);
   }
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

 [DeleteUser.pending] : (state) => {
   state.loading = true;
},
[DeleteUser.fulfilled] : (state,action) =>{
   state.loading = false;
   const {id} = action.payload;
   state.users = state.users.filter((data => data.id !== id));
},
[DeleteUser.rejected] : (state, action) =>{
   state.loading = false;
   state.error = action.payload;
},
}
})

export const {ViewData, DeleteData, EditFind} = ReadSlice.actions;
export default ReadSlice.reducer;