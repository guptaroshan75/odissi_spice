import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    contact_us: null
};

export const contactUs_Post = createAsyncThunk("contact/contactUs", async (formData) => {
    try {
        const response = await axios.post(`${API}/send-email`, formData);
        return response.data;
    } catch (error) {
        return error
    }
}
);

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(contactUs_Post.pending, (state) => {
                state.isLoading = true
            })
            .addCase(contactUs_Post.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contact_us = payload
            })
    }
})

export default contactSlice.reducer;