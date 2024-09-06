import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    allSpecialProposition: [],
};

export const getAllSpecialProposition = createAsyncThunk('specialProposition/getAll', async () => {
    try {
        const response = await axios.get(`${API}/specialproposition`);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
})

export const propositionSlice = createSlice({
    name: 'propositionSlice',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllSpecialProposition.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllSpecialProposition.fulfilled, (state, { payload } ) => {
            state.isLoading = false;
            state.allSpecialProposition = payload;
        })
    }
})

export default propositionSlice.reducer;