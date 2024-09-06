import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    allMenus: [],
    allMenuLists: [],
};

export const getAllMenu = createAsyncThunk('menuCategory/getAll', async () => {
    try {
        const allMenus = []; let page = 1;
        while (true) {
            const response = await axios.get(`${API}/menu_category?page=${page}`);
            const data = response.data;
            if (data.length === 0) break;
            allMenus.push(...data);
            page++;
        }
        return allMenus;
    } catch (error) {
        console.log(error);
    }
});

export const getAllMenuList = createAsyncThunk('menuList/getAll', async () => {
    try {
        const allMenuLists = []; let page = 1; const perPage = 100; const maxPages = 3;
        while (page <= maxPages) {
            const response = await axios.get(`${API}/menulist?page=${page}&per_page=${perPage}`);
            const data = response.data;
            allMenuLists.push(...data);
            page++;
        }
        return allMenuLists;
    } catch (error) {
        console.log(error);
        throw error
    }
})

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMenu.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllMenu.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allMenus = payload;
            })
            .addCase(getAllMenuList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allMenuLists = payload;
            })
    }
})

export default menuSlice.reducer;