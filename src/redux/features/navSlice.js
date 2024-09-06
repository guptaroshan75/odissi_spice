import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    allNav: [],
    allFooterNav: [],
};

export const getAllNav = createAsyncThunk("primary-menu", async () => {
    try {
        const response = await axios.get(`${API}/menus/primary-menu`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getAllFooterMenu = createAsyncThunk("footer-menu", async () => {
    try {
        const response = await axios.get(`${API}/menus/quick-links`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const navSlice = createSlice({
    name: "navSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllNav.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllNav.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allNav = payload;
            })
            .addCase(getAllFooterMenu.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allFooterNav = payload;
            })
    },
});

export default navSlice.reducer;