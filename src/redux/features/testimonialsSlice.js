import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API";
import axios from "axios";

const initialState = {
    isLoading: false,
    allTestimonials: [],
};

export const getAllTestimonials = createAsyncThunk('testimonials/getAll', async () => {
    try {
        const response = await axios.get(`${API}/testimonials`);
        return response?.data;
    } catch (error) {
        console.log(error);
        throw error
    }
})

export const testimonialsSlice = createSlice({
    name: 'testimonialsSlice',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllTestimonials.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllTestimonials.fulfilled, (state, { payload } ) => {
            state.isLoading = false;
            state.allTestimonials = payload;
        })
    }
})

export default testimonialsSlice.reducer;