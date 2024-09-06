import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    allMedia: [],
};

export const getAllMedia = createAsyncThunk('media/getAll', async () => {
    try {
        const allMedia = []; let page = 1; const perPage = 100; const maxPages = 2;
        while (page <= maxPages) {
            const response = await axios.get(`${API}/media?page=${page}&per_page=${perPage}`);
            const data = response.data;
            allMedia.push(...data);
            page++;
        }
        return allMedia;
    } catch (error) {
        console.log(error);
        throw error
    }
})

export const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMedia.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllMedia.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allMedia = payload;
            })
    }
})

export default mediaSlice.reducer;